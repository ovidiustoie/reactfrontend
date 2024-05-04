import { useAppSelector } from "@application/store";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";
import { BookItemApi, BookItemDTO, ApiBookItemGetPageGetRequest, BookItemUpdateDTO } from "../client";

/**
 * Use constants to identify mutations and queries.
 */
const getBookItemQueryKey = "getBookItemQueryKey";
const getBookItemsQueryKey = "getBookItemsQueryKey";
const addBookItemMutationKey = "addBookItemMutationKey";
const deleteBookItemMutationKey = "deleteBookItemMutationKey";
const updateBookItemMutationKey = "updateBookItemMutationKey";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the author API.
 */
export const useBookItemApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getBookItems = (page: ApiBookItemGetPageGetRequest) => new BookItemApi(config).apiBookItemGetPageGet(page); // Use the generated client code and adapt it.
    const getBookItem = (id: string) => new BookItemApi(config).apiBookItemGetByIdIdGet({ id });
    const addBookItem = (bookItem: BookItemDTO) => new BookItemApi(config).apiBookItemAddPost({ bookItemDTO: bookItem });
    const deleteBookItem = (id: string) => new BookItemApi(config).apiBookItemDeleteIdDelete({ id });
    const updateBookItem = (bookItem:BookItemUpdateDTO ) => new BookItemApi(config).apiBookItemUpdatePut({ bookItemUpdateDTO: bookItem });

    return {
        getBookItems: { // Return the query object.
            key: getBookItemsQueryKey, // Add the key to identify the query.
            query: getBookItems // Add the query callback.
        },
        getBookItem: {
            key: getBookItemQueryKey,
            query: getBookItem
        },
        addBookItem: { // Return the mutation object.
            key: addBookItemMutationKey, // Add the key to identify the mutation.
            mutation: addBookItem // Add the mutation callback.
        },
        deleteBookItem: {
            key: deleteBookItemMutationKey,
            mutation: deleteBookItem
        },
        updateBookItem: {
            key: updateBookItemMutationKey,
            mutation: updateBookItem
        },
    }
}