import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { useAuthorAddDialogController } from "./AuthorAddDialog.controller";
import { AuthorAddForm } from "@presentation/components/forms/Author/AuthorAddForm";
import { useIntl } from "react-intl";
import EditIcon from '@mui/icons-material/Edit';


export const AuthorEditDialog = (props: { id?: string }) => {
    const { setIsOpen, isOpen } = useAuthorAddDialogController();
    const { formatMessage } = useIntl();

    return <span><IconButton color="success" onClick={() =>setIsOpen(true)}>
        <EditIcon color="success" fontSize='small' />
        </IconButton>
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}>
            <DialogTitle>
                {formatMessage({ id: "labels.editAuthor" })}
            </DialogTitle>
            <DialogContent>
                <AuthorAddForm onSubmit={() => setIsOpen(false)} id={props.id} />
            </DialogContent>
        </Dialog>
    </span>

};