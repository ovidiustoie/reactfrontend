import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { RegisterUserForm } from "@presentation/components/forms/Register/RegisterForm";

export const RegisterUserPage = memo(() => {
    return <Fragment>
        <Seo title="MobyLab Web App | Register User" />
        <WebsiteLayout>
            <Box sx={{ padding: "0px 50px 0px 50px", justifyItems: "center" }}>
                <RegisterUserForm />
            </Box>
        </WebsiteLayout>
    </Fragment>
});
