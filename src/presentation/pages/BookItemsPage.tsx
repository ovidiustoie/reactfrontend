import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { useParams } from 'react-router-dom';
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";
import { BookItemTable } from "@presentation/components/ui/Tables/BookItemTable";

export const BookItemsPage = memo(() => {
    let { id } = useParams();
    id = id || '';
    return <Fragment>
        <Seo title="MobyLab Web App | Book Items" />
        <WebsiteLayout>
            <Box sx={{ padding: "0px 50px 00px 50px", justifyItems: "center" }}>
                <ContentCard>
                    <BookItemTable bookId={id} />
                </ContentCard>
            </Box>
        </WebsiteLayout>
    </Fragment>
});