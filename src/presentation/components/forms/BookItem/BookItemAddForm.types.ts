import { FormController } from "../FormController";
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired,
    UseFormWatch
} from "react-hook-form";

export type BookItemFormModel = {
    id?: string,
    barCode: string;
    bookId: string;
    bookTitle: string;
};

export type AuthorAddFormState = {
    errors: FieldErrorsImpl<DeepRequired<BookItemFormModel>>;
};

export type AuthorAddFormActions = {
    register: UseFormRegister<BookItemFormModel>;
    watch: UseFormWatch<BookItemFormModel>;
    handleSubmit: UseFormHandleSubmit<BookItemFormModel>;
    submit: (body: BookItemFormModel) => void;
};
export type AuthorAddFormComputed = {
    defaultValues: BookItemFormModel,
    isSubmitting: boolean
};

export type BookItemFormController = FormController<AuthorAddFormState, AuthorAddFormActions, AuthorAddFormComputed>;