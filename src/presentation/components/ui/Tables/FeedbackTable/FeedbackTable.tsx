import { useIntl } from "react-intl";
import { isUndefined } from "lodash";
import { useConfirm } from "material-ui-confirm";
import { IconButton, Paper, Table, TableBody, TableCell, TableFooter, TableContainer, TableHead, TablePagination, TableRow, Typography, Grid, TextField, Link } from "@mui/material";
import { DataLoadingContainer } from "../../LoadingDisplay";
import { useFeedbackTableController } from "./FeedbackTable.controller";
import { FeedbackDTO } from "@infrastructure/apis/client";
import DeleteIcon from '@mui/icons-material/Delete';

/**
 * This hook returns a header for the table with translated columns.
 */
const useHeader = (): { key: keyof FeedbackDTO, name: string }[] => {
    const { formatMessage } = useIntl();

    return [
        { key: "score", name: formatMessage({ id: "globals.feedbackScore" }) },
        { key: "siteDificulty", name: formatMessage({ id: "globals.feedbackSiteDificulty" }) },
        { key: "siteGoal", name: formatMessage({ id: "globals.feedbackSiteGoal" }) },
        { key: "sugestion", name: formatMessage({ id: "globals.feedbackSugestion" }) },
        { key: "recommendToOthers", name: formatMessage({ id: "globals.feedbackRecommendToOthers" }) },
    
    ]
};

/**
 * The values in the table are organized as rows so this function takes the entries and creates the row values ordering them according to the order map.
 */
const getRowValues = (entries: FeedbackDTO[] | null | undefined, orderMap: { [key: string]: number }) =>
    entries?.map(
        entry => {
            return {
                entry: entry,
                data: Object.entries(entry).filter(([e]) => !isUndefined(orderMap[e])).sort(([a], [b]) => orderMap[a] - orderMap[b]).map(([key, value]) => { return { key, value } })
            }
        });

export const FeedbackTable = () => {
    const { formatMessage } = useIntl();
    const header = useHeader();
    const orderMap = header.reduce((acc, e, i) => { return { ...acc, [e.key]: i } }, {}) as { [key: string]: number }; // Get the header column order.
    const { handleChangePage, handleChangePageSize, pagedData, isError, isLoading, tryReload, 
        labelDisplay, 
        remove,
        search,
        setSearchValue,
    } = useFeedbackTableController(); // Use the controller hook.
    const rowValues = getRowValues(pagedData?.data, orderMap); // Get the row values.
    const confirm = useConfirm();
    const removeHandler = (id: string) => {
        confirm({
            title: formatMessage({ id: "globals.confirm" }),
            description: formatMessage({ id: "globals.confirmRemove" }),
            confirmationText: formatMessage({ id: "globals.confirmOK" }),
            cancellationText: formatMessage({ id: "globals.confirmCancel" }),
        }).then(() => remove(id || '')).catch(() => { });
    };
    return <DataLoadingContainer isError={isError} isLoading={isLoading} tryReload={tryReload}> {/* Wrap the table into the loading container because data will be fetched from the backend and is not immediately available.*/}
        <Grid container item direction="row" xs={12} columnSpacing={4}>
                <Grid container item direction="column" xs={6} md={6}></Grid>
                <Grid container item direction="column" xs={6} md={6}><TextField placeholder={formatMessage({ id: "globals.search" })} size="small" onChange={(e) => setSearchValue(e.target.value)} autoComplete="none" /></Grid>
        </Grid>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>{
                        header.map(e => <TableCell key={`header_${String(e.key)}`}>{e.name}</TableCell>)
                    }
                        <TableCell>{formatMessage({ id: "labels.actions" })}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rowValues?.map(({ data, entry }, rowIndex) => <TableRow key={`row_${rowIndex + 1}`}>
                            {data.map((keyValue, index) => <TableCell key={`cell_${rowIndex + 1}_${index + 1}`}>{keyValue.value + ''}</TableCell>)}
                            <TableCell> {/* Add other cells like action buttons. */}
                               {
                                    <IconButton color="error" onClick={() => removeHandler(entry.id || '')}>
                                        <DeleteIcon color="error" fontSize='small' />
                                    </IconButton>
                                }
                                
                            </TableCell>
                        </TableRow>)
                    }
                </TableBody>
                {!isUndefined(pagedData) && !isUndefined(pagedData?.totalCount) && !isUndefined(pagedData?.page) && !isUndefined(pagedData?.pageSize) &&
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={header.length + 1} >
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    component="div"
                                    count={pagedData.totalCount}
                                    rowsPerPage={pagedData.pageSize}
                                    page={pagedData.totalCount !== 0 ? pagedData.page - 1 : 0}
                                    labelRowsPerPage={formatMessage({ id: "labels.itemsPerPage" })}
                                    onPageChange={handleChangePage}
                                    labelDisplayedRows={labelDisplay}
                                    onRowsPerPageChange={handleChangePageSize}
                                />

                            </TableCell>
                        </TableRow>
                    </TableFooter>}
            </Table>
        </TableContainer>
    </DataLoadingContainer>

}