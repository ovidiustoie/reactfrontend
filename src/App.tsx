import { UserRoleEnum } from "@infrastructure/apis/client";
import { useOwnUserHasRole } from "@infrastructure/hooks/useOwnUser";
import { AppIntlProvider } from "@presentation/components/ui/AppIntlProvider";
import { ToastNotifier } from "@presentation/components/ui/ToastNotifier";
import { AuthorsPage } from "@presentation/pages/AuthorsPage";
import { HomePage } from "@presentation/pages/HomePage";
import { LoginPage } from "@presentation/pages/LoginPage";
import { RegisterUserPage } from "@presentation/pages/RegisterPage";

import { UserFilesPage } from "@presentation/pages/UserFilesPage";
import { UsersPage } from "@presentation/pages/UsersPage";
import { BooksPage } from "@presentation/pages/BooksPage";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "routes";
import { ConfirmProvider } from "material-ui-confirm"
import { LibrariansPage } from "@presentation/pages/LibrariansPage";

export function App() {
  const isAdmin = useOwnUserHasRole(UserRoleEnum.Admin);
  const isPersonal = useOwnUserHasRole(UserRoleEnum.Personnel); 

  return <AppIntlProvider> {/* AppIntlProvider provides the functions to search the text after the provides string ids. */}
    <ToastNotifier />
    {/* This adds the routes and route mappings on the various components. */}
    <ConfirmProvider> {
      <Routes>
        <Route path={AppRoute.Index} element={<HomePage />} /> {/* Add a new route with a element as the page. */}
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.RegisterUser} element={<RegisterUserPage />} />
        {isAdmin && <Route path={AppRoute.Users} element={<UsersPage />} />} {/* If the user doesn't have the right role this route shouldn't be used. */}
        {isAdmin && <Route path={AppRoute.UserFiles} element={<UserFilesPage />} />}
        {<Route path={AppRoute.Authors} element={<AuthorsPage />} />}
        {<Route path={AppRoute.Books} element={<BooksPage />} />}
        {(isAdmin || isPersonal) && <Route path={AppRoute.Librarians} element={<LibrariansPage />} />}
      </Routes>
    }</ConfirmProvider>
  </AppIntlProvider>
}
