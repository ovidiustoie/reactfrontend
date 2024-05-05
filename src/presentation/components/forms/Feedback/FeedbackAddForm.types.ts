import { SiteGoalEnum, SiteDifficultyEnum } from "@infrastructure/apis/client";
import { FormController } from "../FormController";
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired,
    UseFormWatch
} from "react-hook-form";
import { SelectChangeEvent } from "@mui/material";

export type FeedbackAddFormModel = {
    score: number;
    sugestion: string;
    siteGoal: SiteGoalEnum,
    siteDificulty: SiteDifficultyEnum,
    recommendToOthers: boolean;
};

export type FeedbackAddFormState = {
    errors: FieldErrorsImpl<DeepRequired<FeedbackAddFormModel>>;
};

export type FeedbackAddFormActions = {
    register: UseFormRegister<FeedbackAddFormModel>;
    watch: UseFormWatch<FeedbackAddFormModel>;
    handleSubmit: UseFormHandleSubmit<FeedbackAddFormModel>;
    submit: (body: FeedbackAddFormModel) => void;
    selectSiteGoal: (value: SelectChangeEvent<SiteGoalEnum>) => void;
    selectScore: (event: React.SyntheticEvent, value: number | null) => void;
    selectDificulty: (event: React.ChangeEvent, value: string) => void;
    selectRecommendToOthers: (event: React.ChangeEvent, value: boolean) => void;
};
export type FeedbackAddFormComputed = {
    defaultValues: FeedbackAddFormModel,
    isSubmitting: boolean
};

export type FeedbackAddFormController = FormController<FeedbackAddFormState, FeedbackAddFormActions, FeedbackAddFormComputed>;