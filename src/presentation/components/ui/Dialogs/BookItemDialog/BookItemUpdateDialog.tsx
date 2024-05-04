import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { useBookItemAddDialogController } from "./BookItemAddDialog.controller";
import { BookItemAddForm } from "@presentation/components/forms/BookItem/BookItemAddForm";
import { useIntl } from "react-intl";
import EditIcon from '@mui/icons-material/Edit';


export const BookItemUpdateDialog = (props: { bookId: string, id?: string }) => {
    const { setIsOpen, isOpen } = useBookItemAddDialogController();
    const { formatMessage } = useIntl();

    return <span><IconButton color="success" onClick={() =>setIsOpen(true)}>
        <EditIcon color="success" fontSize='small' />
        </IconButton>
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}>
            <DialogTitle>
                {formatMessage({ id: "labels.editBookItem" })}
            </DialogTitle>
            <DialogContent>
                <BookItemAddForm onSubmit={() => setIsOpen(false)} bookId={props.bookId} id={props.id} />
            </DialogContent>
        </Dialog>
    </span>

};