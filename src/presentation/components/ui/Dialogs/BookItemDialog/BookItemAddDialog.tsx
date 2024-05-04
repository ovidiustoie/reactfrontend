import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useBookItemAddDialogController } from "./BookItemAddDialog.controller";
import { BookItemAddForm } from "@presentation/components/forms/BookItem/BookItemAddForm";
import { useIntl } from "react-intl";
import ControlPoint from '@mui/icons-material/ControlPoint';

/**
 * This component wraps the user add form into a modal dialog.
 */
export const BookItemAddDialog = (props: { bookId: string}) => {
  const { open, close, isOpen } = useBookItemAddDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button  startIcon={<ControlPoint />}  variant="outlined" onClick={open}>
      {formatMessage({ id: "labels.addBookItem" })}
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.addBookItem" })}
      </DialogTitle>
      <DialogContent>
        <BookItemAddForm onSubmit={close} bookId={props.bookId}/>
      </DialogContent>
    </Dialog>
  </div>
};