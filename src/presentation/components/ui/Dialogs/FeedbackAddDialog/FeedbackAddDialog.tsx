import { Button, Dialog, DialogContent, DialogTitle, Link } from "@mui/material";
import { useFeedbackAddDialogController } from "./FeedbackAddDialog.controller";
import { FeedbackAddForm } from "@presentation/components/forms/Feedback/FeedbackAddForm";
import { useIntl } from "react-intl";

/**
 * This component wraps the user add form into a modal dialog.
 */
export const FeedbackAddDialog = () => {
  const { open, close, isOpen } = useFeedbackAddDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button component="div" variant="text" disableElevation={true} color="inherit" onClick={open}>
      {formatMessage({ id: "labels.feedbackMenu" })}
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.feedbackTitle" })}
      </DialogTitle>
      <DialogContent>
        <FeedbackAddForm onSubmit={close} />
      </DialogContent>
    </Dialog>
  </div>
};