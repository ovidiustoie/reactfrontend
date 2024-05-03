import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useLibrarianAddDialogController } from "./LibrarianAddDialog.controller";
import { LibrarianAddForm } from "@presentation/components/forms/Librarian/LibrarianAddForm";
import { useIntl } from "react-intl";
import ControlPoint from '@mui/icons-material/ControlPoint';

/**
 * This component wraps the user add form into a modal dialog.
 */
export const LibrarianAddDialog = () => {
  const { open, close, isOpen } = useLibrarianAddDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button  startIcon={<ControlPoint />}  variant="outlined" onClick={open}>
      {formatMessage({ id: "labels.addLibrarian" })}
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.addLibrarian" })}
      </DialogTitle>
      <DialogContent>
        <LibrarianAddForm onSubmit={close} />
      </DialogContent>
    </Dialog>
  </div>
};