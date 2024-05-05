import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";
import { FeedbackTable } from "@presentation/components/ui/Tables/FeedbackTable";

export const FeedbacksPage = memo(() => {
  return <Fragment>
    <Seo title="MobyLab Web App | Feedbacks" />
    <WebsiteLayout>
    <Box sx={{ padding: "0px 50px 00px 50px", justifyItems: "center" }}>
        <ContentCard>
          <FeedbackTable />
        </ContentCard>
      </Box>
    </WebsiteLayout>
  </Fragment>
});