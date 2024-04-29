import { AuthorAddFormController, AuthorAddFormModel } from "./AuthorAddForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIntl } from "react-intl";
import * as yup from "yup";
import { isUndefined } from "lodash";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthorApi } from "@infrastructure/apis/api-management";
import { useCallback } from "react";

/**
 * Use a function to return the default values of the form and the validation schema.
 * You can add other values as the default, for example when populating the form with data to update an entity in the backend.
 */
const getDefaultValues = (initialData?: AuthorAddFormModel): AuthorAddFormModel => {
    const defaultValues = {
        firstName: "",
        lastName: "",
        description: "",
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
const useInitAuthorAddForm = (id?: string) => {
    const { formatMessage } = useIntl();
    const defaultValues = getDefaultValues();
    const { getAuthor } = useAuthorApi();
    
    let defValues: AuthorAddFormModel | (() => Promise<AuthorAddFormModel>) = defaultValues;
    if (id) {
        defValues = async (): Promise<AuthorAddFormModel> => {
            const data = await getAuthor.query(id);
            return {
                id: data.response?.id || '',
                firstName: data.response?.firstName || '',
                lastName: data.response?.lastName || '',
                description: data.response?.description || '',
            };
        };
    }

    const schema = yup.object().shape({
        firstName: yup.string()
            .default(defaultValues.firstName),
        lastName: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.lastName",
                    }),
                }))
            .default(defaultValues.lastName),
        description: yup.string()
            .default(defaultValues.description),
    });

    const resolver = yupResolver(schema);

    return { defaultValues: defValues, resolver };
}

/**
 * Create a controller hook for the form and return any data that is necessary for the form.
 */
export const useAuthorAddFormController = (onSubmit?: () => void, id?: string): AuthorAddFormController => {
    const { 
        addAuthor: { mutation, key: mutationKey }, 
        updateAuthor: { mutation: mutationUpdate, key: mutationUpdateKey }, 
        getAuthors: { key: queryKey } 
    
    } = useAuthorApi();
    
    const { mutateAsync: add, status } = useMutation({
        mutationKey: [id ? mutationUpdateKey:  mutationKey],
        mutationFn: id ? mutationUpdate: mutation
    });
    const queryClient = useQueryClient();
    const { defaultValues, resolver } = useInitAuthorAddForm(id);

    const submit = useCallback((data: AuthorAddFormModel) => // Create a submit callback to send the form data to the backend.
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
    } = useForm<AuthorAddFormModel>({ // Use the useForm hook to get callbacks and variables to work with the form.
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