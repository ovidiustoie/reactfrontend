import {
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    Stack,
    Select,
    MenuItem,
    Rating,
    Typography,
    OutlinedInput,
    RadioGroup,
    FormControlLabel,
    Radio,
    Checkbox
} from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { useFeedbackAddFormController } from "./FeedbackAddForm.controller";
import { isEmpty, isUndefined } from "lodash";
import { SiteDifficultyEnum, SiteGoalEnum } from "@infrastructure/apis/client";

/**
 * Here we declare the user add form component.
 * This form may be used in modals so the onSubmit callback could close the modal on completion.
 */
export const FeedbackAddForm = (props: { onSubmit?: () => void }) => {
    const { formatMessage } = useIntl();
    const { state, actions, computed } = useFeedbackAddFormController(props.onSubmit); // Use the controller.

    return <form onSubmit={actions.handleSubmit(actions.submit)}> {/* Wrap your form into a form tag and use the handle submit callback to validate the form and call the data submission. */}
        <Stack spacing={4} style={{ width: "100%" }}>
            <div>
                <Grid container item direction="row" xs={12} columnSpacing={4}>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl>
                            <FormLabel required>
                                <FormattedMessage id="globals.siteScore" />
                            </FormLabel>
                            <Rating
                                name="simple-controlled"
                                value={actions.watch("score")}
                                onChange={actions.selectScore}
                            />
                        </FormControl>

                    </Grid>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl>
                            <FormLabel required><FormattedMessage id="globals.siteDifficulty" /></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={actions.watch("siteDificulty")}
                                name="radio-buttons-group"
                                onChange={actions.selectDificulty}
                            >
                                <FormControlLabel value={SiteDifficultyEnum.VeryEasy} control={<Radio />} label={formatMessage({ id: "globals.sdVeryEasy" })} />
                                <FormControlLabel value={SiteDifficultyEnum.Easy} control={<Radio />} label={formatMessage({ id: "globals.sdEasy" })} />
                                <FormControlLabel value={SiteDifficultyEnum.Difficult} control={<Radio />} label={formatMessage({ id: "globals.sdDifficult" })} />
                                <FormControlLabel value={SiteDifficultyEnum.VeryDifficult} control={<Radio />} label={formatMessage({ id: "globals.sdVeryDifficult" })} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.siteGoal)}
                        >
                            <FormLabel required>
                                <FormattedMessage id="globals.siteGoal" />
                            </FormLabel>
                            <Select
                                {...actions.register("siteGoal")}
                                value={actions.watch("siteGoal")}
                                onChange={actions.selectSiteGoal} // Selects may need a listener to for the variable change.
                                displayEmpty
                            >
                                <MenuItem value="" disabled> {/* Add the select options, the first here is used as a placeholder. */}
                                    <span className="text-gray">
                                        {formatMessage({ id: "globals.siteGoal" })}
                                    </span>
                                </MenuItem>
                                <MenuItem value={SiteGoalEnum.Yes}>
                                    <FormattedMessage id="globals.sgYes" />
                                </MenuItem>
                                <MenuItem value={SiteGoalEnum.Partially}>
                                    <FormattedMessage id="globals.sgPartially" />
                                </MenuItem>
                                <MenuItem value={SiteGoalEnum.No}>
                                    <FormattedMessage id="globals.sgNo" />
                                </MenuItem>
                            </Select>
                            <FormHelperText
                                hidden={isUndefined(state.errors.siteGoal)}
                            >
                                {state.errors.siteGoal?.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControlLabel required control={ <Checkbox
                                checked={actions.watch("recommendToOthers")}
                                onChange={actions.selectRecommendToOthers}
                            />} label={formatMessage({ id: "globals.siteRecommendToOthers" })} />
                           
                      
                    </Grid>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.sugestion)}
                        >
                            <FormLabel>
                                <FormattedMessage id="globals.feedbackSugestion" />
                            </FormLabel>
                            <OutlinedInput
                                type="text"
                                multiline={true}
                                {...actions.register("sugestion")}
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.feedbackSugestion",
                                        }),
                                    })}
                                autoComplete="none"
                            />
                            <FormHelperText
                                hidden={isUndefined(state.errors.sugestion)}
                            >
                                {state.errors.sugestion?.message}
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