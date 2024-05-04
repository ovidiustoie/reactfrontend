import { BookItemFormController, BookItemFormModel } from "./BookItemAddForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIntl } from "react-intl";
import * as yup from "yup";
import { isUndefined } from "lodash";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBookItemApi } from "@infrastructure/apis/api-management";
import { useCallback } from "react";

/**
 * Use a function to return the default values of the form and the validation schema.
 * You can add other values as the default, for example when populating the form with data to update an entity in the backend.
 */
const getDefaultValues = (initialData?: BookItemFormModel): BookItemFormModel => {
    const defaultValues = {
        barCode: "",
        bookTitle: "",
        bookId: "",
    };

    if (!isUndefined(initialData)) {
        return {
            ...defaultValues,
            ...initialData,
        };
    }

    return defaultValues;
};

/**
 * Create a hook to get the validation schema.
 */
const useInitBookItemAddForm = ( bookId: string, id?: string) => {
    const { formatMessage } = useIntl();
    const defaultValues = getDefaultValues({bookId, barCode: '', bookTitle: ''});
    const { getBookItem } = useBookItemApi();

    let defValues: BookItemFormModel | (() => Promise<BookItemFormModel>) = defaultValues;
    if (id) {
        defValues = async (): Promise<BookItemFormModel> => {
            const data = await getBookItem.query(id);
            return {
                id: data.response?.id || '',
                barCode: data.response?.barCode || '',
                bookId: data.response?.bookId || '',
                bookTitle: data.response?.bookTitle || '',
            };
        };
    }

    const schema = yup.object().shape({
        bookId: yup.string()
            .default(defaultValues.bookId),
        bookTitle: yup.string()
            .default(defaultValues.bookTitle),
        barCode: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.barCode",
                    }),
                }))
            .default(defaultValues.barCode),
    });

    const resolver = yupResolver(schema);

    return { defaultValues: defValues, resolver };
}

/**
 * Create a controller hook for the form and return any data that is necessary for the form.
 */
export const useBookItemAddFormController = (onSubmit: () => void, bookId: string, id?: string): BookItemFormController => {
    const {
        addBookItem: { mutation, key: mutationKey },
        updateBookItem: { mutation: mutationUpdate, key: mutationUpdateKey },
        getBookItems: { key: queryKey }

    } = useBookItemApi();

    const { mutateAsync: add, status } = useMutation({
        mutationKey: [id ? mutationUpdateKey : mutationKey],
        mutationFn: id ? mutationUpdate : mutation
    });
    const queryClient = useQueryClient();
    const { defaultValues, resolver } = useInitBookItemAddForm(bookId, id);

    const submit = useCallback((data: BookItemFormModel) => // Create a submit callback to send the form data to the backend.
        add(data).then(() => {
            queryClient.invalidateQueries({ queryKey: [queryKey] }); // If the form submission succeeds then some other queries need to be refresh so invalidate them to do a refresh.
            if (onSubmit) {
                onSubmit();
            }
        }), [add, queryClient, queryKey]);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm<BookItemFormModel>({ // Use the useForm hook to get callbacks and variables to work with the form.
        defaultValues, // Initialize the form with the default values.
        resolver // Add the validation resolver.
    });

    return {
        actions: { // Return any callbacks needed to interact with the form.
            handleSubmit, // Add the form submit handle.
            submit, // Add the submit handle that needs to be passed to the submit handle.
            register, // Add the variable register to bind the form fields in the UI with the form variables.
            watch, // Add a watch on the variables, this function can be used to watch changes on variables if it is needed in some locations.
        },
        computed: {
            defaultValues: getDefaultValues(),
            isSubmitting: status === "pending" // Return if the form is still submitting or nit.
        },
        state: {
            errors // Return what errors have occurred when validating the form input.
        }
    }
}