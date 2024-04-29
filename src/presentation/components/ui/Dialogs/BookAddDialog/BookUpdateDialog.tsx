import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { useBookAddDialogController } from "./BookAddDialog.controller";
import { BookAddForm } from "@presentation/components/forms/Book/BookAddForm";
import { useIntl } from "react-intl";
import EditIcon from '@mui/icons-material/Edit';


export const BookUpdateDialog = (props: { id?: string }) => {
    const { setIsOpen, isOpen } = useBookAddDialogController();
    const { formatMessage } = useIntl();

    return <span><IconButton color="success" onClick={() =>setIsOpen(true)}>
        <EditIcon color="success" fontSize='small' />
        </IconButton>
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}>
            <DialogTitle>
                {formatMessage({ id: "labels.editBook" })}
            </DialogTitle>
            <DialogContent>
                <BookAddForm onSubmit={() => setIsOpen(false)} id={props.id} />
            </DialogContent>
        </Dialog>
    </span>

};