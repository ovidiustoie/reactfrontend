import {
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    Stack,
    OutlinedInput
} from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { useBookAddFormController } from "./BookAddForm.controller";
import { isEmpty, isUndefined } from "lodash";
import { AuthorsLookup } from "./AuthorsLookup";

/**
 * Here we declare the user add form component.
 * This form may be used in modals so the onSubmit callback could close the modal on completion.
 */
export const BookAddForm = (props: { onSubmit?: () => void, id?:string }) => {
    const { formatMessage } = useIntl();
    const { state, actions, computed } = useBookAddFormController(props.onSubmit, props.id); // Use the controller.
    return <form onSubmit={actions.handleSubmit(actions.submit)}> {/* Wrap your form into a form tag and use the handle submit callback to validate the form and call the data submission. */}
        <Stack spacing={4} style={{ width: "100%" }}>
            <div>
                <Grid container item direction="row" xs={12} columnSpacing={4}>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.title)}
                        > {/* Wrap the input into a form control and use the errors to show the input invalid if needed. */}
                            <FormLabel>
                                <FormattedMessage id="globals.bookTitle" />
                            </FormLabel> {/* Add a form label to indicate what the input means. */}
                            <OutlinedInput
                                {...actions.register("title")} // Bind the form variable to the UI input.
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.bookTitle",
                                        }),
                                    })}
                                autoComplete="none"
                            /> {/* Add a input like a textbox shown here. */}
                            <FormHelperText
                                hidden={isUndefined(state.errors.title)}
                            >
                                {state.errors.title?.message}
                            </FormHelperText> {/* Add a helper text that is shown then the input has a invalid value. */}
                        </FormControl>
                    </Grid>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.title)}
                        > {/* Wrap the input into a form control and use the errors to show the input invalid if needed. */}
                            <FormLabel>
                                <FormattedMessage id="globals.authors" />
                            </FormLabel> {/* Add a form label to indicate what the input means. */}
                            <AuthorsLookup
                                value={actions.watch("authors")}
                                fullWidth={true}
                                noOptionsText={formatMessage({ id: "globals.noAuthors" })}
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.authors",
                                        }),
                                    })}
                                onChange= {actions.selectAuthors}  
                                />
                            <FormHelperText
                                hidden={isUndefined(state.errors.authors)}
                            >
                                {state.errors.authors?.message}
                            </FormHelperText> {/* Add a helper text that is shown then the input has a invalid value. */}
                        </FormControl>
                    </Grid>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.summary)}
                        >
                            <FormLabel>
                                <FormattedMessage id="globals.description" />
                            </FormLabel>
                            <OutlinedInput
                                type="text"
                                multiline={true}
                                {...actions.register("summary")}
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.description",
                                        }),
                                    })}
                                autoComplete="none"
                            />
                            <FormHelperText
                                hidden={isUndefined(state.errors.summary)}
                            >
                                {state.errors.summary?.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item direction="row" xs={12} className="padding-top-sm">
                    <Grid container item direction="column" xs={12} md={7}></Grid>
                    <Grid container item direction="column" xs={5}>
                        <Button type="submit" disabled={!isEmpty(state.errors) || computed.isSubmitting}> {/* Add a button with type submit to call the submission callback if the button is a descended of the form element. */}
                            {!computed.isSubmitting && <FormattedMessage id="globals.submit" />}
                            {computed.isSubmitting && <CircularProgress />}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Stack>
    </form>
};