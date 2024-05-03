import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { useLibrarianAddDialogController } from "./LibrarianAddDialog.controller";
import { LibrarianAddForm } from "@presentation/components/forms/Librarian/LibrarianAddForm";
import { useIntl } from "react-intl";
import EditIcon from '@mui/icons-material/Edit';


export const LibrarianEditDialog = (props: { id?: string }) => {
    const { setIsOpen, isOpen } = useLibrarianAddDialogController();
    const { formatMessage } = useIntl();

    return <span><IconButton color="success" onClick={() =>setIsOpen(true)}>
        <EditIcon color="success" fontSize='small' />
        </IconButton>
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}>
            <DialogTitle>
                {formatMessage({ id: "labels.editLibrarian" })}
            </DialogTitle>
            <DialogContent>
                <LibrarianAddForm onSubmit={() => setIsOpen(false)} id={props.id} />
            </DialogContent>
        </Dialog>
    </span>

};