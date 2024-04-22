import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useAuthorAddDialogController } from "./AuthorAddDialog.controller";
import { AuthorAddForm } from "@presentation/components/forms/Author/AuthorAddForm";
import { useIntl } from "react-intl";

/**
 * This component wraps the user add form into a modal dialog.
 */
export const AuthorAddDialog = () => {
  const { open, close, isOpen } = useAuthorAddDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button variant="outlined" onClick={open}>
      {formatMessage({ id: "labels.addAuthor" })}
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.addAuthor" })}
      </DialogTitle>
      <DialogContent>
        <AuthorAddForm onSubmit={close} />
      </DialogContent>
    </Dialog>
  </div>
};