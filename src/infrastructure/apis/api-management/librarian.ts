import { useAppSelector } from "@application/store";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";
import { LibrarianApi, LibrarianDTO, ApiLibrarianGetPageGetRequest, LibrarianUpdateDTO } from "../client";

/**
 * Use constants to identify mutations and queries.
 */
const getLibrarianQueryKey = "getLibrarianQuery";
const getLibrariansQueryKey = "getLibrariansQuery";
const addLibrarianMutationKey = "addLibrarianMutation";
const deleteLibrarianMutationKey = "deleteLibrarianMutation";
const updateLibrarianMutationKey = "updateLibrarianMutationKey";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the author API.
 */
export const useLibrarianApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getLibrarians = (page: ApiLibrarianGetPageGetRequest) => new LibrarianApi(config).apiLibrarianGetPageGet(page); // Use the generated client code and adapt it.
    const getLibrarian = (id: string) => new LibrarianApi(config).apiLibrarianGetByIdIdGet({ id });
    const addLibrarian = (author: LibrarianDTO) => new LibrarianApi(config).apiLibrarianAddPost({ librarianAddDTO: author });
    const deleteLibrarian = (id: string) => new LibrarianApi(config).apiLibrarianDeleteIdDelete({ id });
    const updateLibrarian = (author:LibrarianUpdateDTO ) => new LibrarianApi(config).apiLibrarianUpdatePut({ librarianUpdateDTO: author });

    return {
        getLibrarians: { // Return the query object.
            key: getLibrariansQueryKey, // Add the key to identify the query.
            query: getLibrarians // Add the query callback.
        },
        getLibrarian: {
            key: getLibrarianQueryKey,
            query: getLibrarian
        },
        addLibrarian: { // Return the mutation object.
            key: addLibrarianMutationKey, // Add the key to identify the mutation.
            mutation: addLibrarian // Add the mutation callback.
        },
        deleteLibrarian: {
            key: deleteLibrarianMutationKey,
            mutation: deleteLibrarian
        },
        updateLibrarian: {
            key: updateLibrarianMutationKey,
            mutation: updateLibrarian
        },
    }
}