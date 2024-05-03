import { FormController } from "../FormController";
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired,
    UseFormWatch
} from "react-hook-form";

export type LibrarianAddFormModel = {
    id?: string,
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    description: string;
};

export type LibrarianAddFormState = {
    errors: FieldErrorsImpl<DeepRequired<LibrarianAddFormModel>>;
};

export type LibrarianAddFormActions = {
    register: UseFormRegister<LibrarianAddFormModel>;
    watch: UseFormWatch<LibrarianAddFormModel>;
    handleSubmit: UseFormHandleSubmit<LibrarianAddFormModel>;
    submit: (body: LibrarianAddFormModel) => void;
};
export type LibrarianAddFormComputed = {
    defaultValues: LibrarianAddFormModel,
    isSubmitting: boolean
};

export type LibrarianAddFormController = FormController<LibrarianAddFormState, LibrarianAddFormActions, LibrarianAddFormComputed>;