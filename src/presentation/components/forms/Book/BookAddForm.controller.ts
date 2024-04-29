import { BookAddFormController, BookAddFormModel } from "./BookAddForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIntl } from "react-intl";
import * as yup from "yup";
import { isUndefined } from "lodash";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBookApi } from "@infrastructure/apis/api-management";
import { useCallback } from "react";
import { AuthorRefDTO } from "@infrastructure/apis/client";

/**
 * Use a function to return the default values of the form and the validation schema.
 * You can add other values as the default, for example when populating the form with data to update an entity in the backend.
 */
const getDefaultValues = (initialData?: BookAddFormModel) => {
    const defaultValues = {
        title: "",
        summary: "",
        authors: [],
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
const useInitBookAddForm = (id?: string) => {
    const { formatMessage } = useIntl();
    const defaultValues = getDefaultValues();
    const { getBook } = useBookApi();
    
    let defValues: BookAddFormModel | (() => Promise<BookAddFormModel>) = defaultValues;
    if (id) {
        defValues = async (): Promise<BookAddFormModel> => {
            const data = await getBook.query(id);
            return {
                id: data.response?.id || '',
                title: data.response?.title || '',
                summary: data.response?.summary || '',
                authors: data.response?.authors || [],
            };
        };
    }
    const schema = yup.object().shape({
        title: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.bookTitle",
                    }),
                }))
            .default(defaultValues.title),
        summary: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.bookSummary",
                    }),
                }))
            .default(defaultValues.summary),
        authors: yup.array()
            .default(defaultValues.authors),
    });

    const resolver = yupResolver(schema);

    return { defaultValues: defValues, resolver };
}

/**
 * Create a controller hook for the form and return any data that is necessary for the form.
 */
export const useBookAddFormController = (onSubmit?: () => void, id?: string): BookAddFormController => {
    const { 
        addBook: { mutation, key: mutationKey }, 
        updateBook: { mutation: mutationUpdate, key: mutationUpdateKey }, 
        getBooks: { key: queryKey } 
    
    } = useBookApi();
    const { mutateAsync: add, status } = useMutation({
        mutationKey: [id ? mutationUpdateKey:  mutationKey],
        mutationFn: id ? mutationUpdate: mutation
    });
    const queryClient = useQueryClient();
    const { defaultValues, resolver } = useInitBookAddForm(id);
    const submit = useCallback((data: BookAddFormModel) => // Create a submit callback to send the form data to the backend.
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
    } = useForm<BookAddFormModel>({ // Use the useForm hook to get callbacks and variables to work with the form.
        defaultValues: defaultValues,
        resolver // Add the validation resolver.
    });

    const selectAuthors = useCallback((data: AuthorRefDTO[]) => { 
        setValue("authors", data, {
            shouldValidate: true,
        });
    }, [setValue]);
    
    return {
        actions: { // Return any callbacks needed to interact with the form.
            handleSubmit, // Add the form submit handle.
            submit, // Add the submit handle that needs to be passed to the submit handle.
            register, // Add the variable register to bind the form fields in the UI with the form variables.
            watch, // Add a watch on the variables, this function can be used to watch changes on variables if it is needed in some locations.
            selectAuthors,
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