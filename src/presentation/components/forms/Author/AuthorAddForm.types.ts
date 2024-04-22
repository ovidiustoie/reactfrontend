import { FormController } from "../FormController";
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired,
    UseFormWatch
} from "react-hook-form";
import { SelectChangeEvent } from "@mui/material";

export type AuthorAddFormModel = {
    firstName: string;
    lastName: string;
    description: string;
};

export type AuthorAddFormState = {
    errors: FieldErrorsImpl<DeepRequired<AuthorAddFormModel>>;
};

export type AuthorAddFormActions = {
    register: UseFormRegister<AuthorAddFormModel>;
    watch: UseFormWatch<AuthorAddFormModel>;
    handleSubmit: UseFormHandleSubmit<AuthorAddFormModel>;
    submit: (body: AuthorAddFormModel) => void;
};
export type AuthorAddFormComputed = {
    defaultValues: AuthorAddFormModel,
    isSubmitting: boolean
};

export type AuthorAddFormController = FormController<AuthorAddFormState, AuthorAddFormActions, AuthorAddFormComputed>;