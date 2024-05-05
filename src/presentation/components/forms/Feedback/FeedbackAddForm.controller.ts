import { FeedbackAddFormController, FeedbackAddFormModel } from "./FeedbackAddForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIntl } from "react-intl";
import * as yup from "yup";
import { isUndefined } from "lodash";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFeedbackApi } from "@infrastructure/apis/api-management";
import { useCallback } from "react";
import { SelectChangeEvent } from "@mui/material";
import { SiteDifficultyEnum, SiteGoalEnum } from "@infrastructure/apis/client";

/**
 * Use a function to return the default values of the form and the validation schema.
 * You can add other values as the default, for example when populating the form with data to update an entity in the backend.
 */
const getDefaultValues = (initialData?: FeedbackAddFormModel) => {
    const defaultValues = {
        score: 0,
        sugestion: "",
        recommendToOthers: false,
        siteGoal: "" as SiteGoalEnum,
        siteDificulty: "" as SiteDifficultyEnum,
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
const useInitFeedbackAddForm = () => {
    const { formatMessage } = useIntl();
    const defaultValues = getDefaultValues();

    const schema = yup.object().shape({
        score: yup.number()
            .default(defaultValues.score),
        sugestion: yup.string()
            .default(defaultValues.sugestion),
        recommendToOthers: yup.bool()
            .default(defaultValues.recommendToOthers),
        siteGoal: yup.string()
            .oneOf([ // The select input should have one of these values.
                SiteGoalEnum.No,
                SiteGoalEnum.Partially,
                SiteGoalEnum.Yes
            ])
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.siteGoal",
                    }),
                }))
            .default(defaultValues.siteGoal),
        siteDificulty: yup.string()
            .oneOf([ // The select input should have one of these values.
                SiteDifficultyEnum.VeryEasy,
                SiteDifficultyEnum.Easy,
                SiteDifficultyEnum.Difficult,
                SiteDifficultyEnum.VeryDifficult,
            ])
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.siteDifficulty",
                    }),
                }))
            .default(defaultValues.siteDificulty)
    });

    const resolver = yupResolver(schema);

    return { defaultValues, resolver };
}

/**
 * Create a controller hook for the form and return any data that is necessary for the form.
 */
export const useFeedbackAddFormController = (onSubmit?: () => void): FeedbackAddFormController => {
    const { defaultValues, resolver } = useInitFeedbackAddForm();
    const { addFeedback: { mutation, key: mutationKey }, getFeedbacks: { key: queryKey } } = useFeedbackApi();
    const { mutateAsync: add, status } = useMutation({
        mutationKey: [mutationKey],
        mutationFn: mutation
    });
    const queryClient = useQueryClient();
    const submit = useCallback((data: FeedbackAddFormModel) => // Create a submit callback to send the form data to the backend.
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
    } = useForm<FeedbackAddFormModel>({ // Use the useForm hook to get callbacks and variables to work with the form.
        defaultValues, // Initialize the form with the default values.
        resolver // Add the validation resolver.
    });

    const selectSiteGoal = useCallback((event: SelectChangeEvent<SiteGoalEnum>) => { // Select inputs are tricky and may need their on callbacks to set the values.
        setValue("siteGoal", event.target.value as SiteGoalEnum, {
            shouldValidate: true,
        });
    }, [setValue]);
    const selectScore = useCallback((event: React.SyntheticEvent, value: number | null) => { 
        setValue("score", value || 0, {
            shouldValidate: true,
        });
    }, [setValue]);

    const selectDificulty = useCallback((event: React.ChangeEvent, value: string) => { 
        setValue("siteDificulty", value  as SiteDifficultyEnum, {
            shouldValidate: true,
        });
    }, [setValue]);

    const selectRecommendToOthers= useCallback((event: React.ChangeEvent, value: boolean) => { 
        setValue("recommendToOthers", value, {
            shouldValidate: true,
        });
    }, [setValue]);

    return {
        actions: { // Return any callbacks needed to interact with the form.
            handleSubmit, // Add the form submit handle.
            submit, // Add the submit handle that needs to be passed to the submit handle.
            register, // Add the variable register to bind the form fields in the UI with the form variables.
            watch, // Add a watch on the variables, this function can be used to watch changes on variables if it is needed in some locations.
            selectSiteGoal,
            selectScore,
            selectDificulty,
            selectRecommendToOthers,
        },
        computed: {
            defaultValues,
            isSubmitting: status === "pending" // Return if the form is still submitting or nit.
        },
        state: {
            errors // Return what errors have occurred when validating the form input.
        }
    }
}