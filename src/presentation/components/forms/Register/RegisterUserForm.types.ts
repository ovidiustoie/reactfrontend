import { FormController } from "../FormController";
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired
} from "react-hook-form";

export type RegisterUserFormModel = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type RegisterUserFormState = {
    errors: FieldErrorsImpl<DeepRequired<RegisterUserFormModel>>;
};

export type RegisterUserFormActions = {
    register: UseFormRegister<RegisterUserFormModel>;
    handleSubmit: UseFormHandleSubmit<RegisterUserFormModel>;
    submit: (body: RegisterUserFormModel) => void;
};
export type RegisterUserFormComputed = {
    defaultValues: RegisterUserFormModel,
    isSubmitting: boolean
};

export type RegisterUserFormController = FormController<RegisterUserFormState, RegisterUserFormActions, RegisterUserFormComputed>;