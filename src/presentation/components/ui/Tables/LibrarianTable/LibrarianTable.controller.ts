import { useTableController } from "../Table.controller";
import { useLibrarianApi } from "@infrastructure/apis/api-management";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { usePaginationController } from "../Pagination.controller";
import { useSearchController } from "../Search.controller";

/**
 * This is controller hook manages the table state including the pagination and data retrieval from the backend.
 */
export const useLibrarianTableController = () => {
    const { 
        getLibrarians: { key: queryKey, query }, 
        deleteLibrarian: { key: deleteLibrarianKey, mutation: deleteLibrarian } 
    } = useLibrarianApi(); // Use the API hook.
    const queryClient = useQueryClient(); // Get the query client.
    const { page, pageSize, setPagination } = usePaginationController(); // Get the pagination state.
    const {search, setSearchValue} = useSearchController();
    const { data, isError, isLoading } = useQuery({
        queryKey: [queryKey, page, pageSize, search ],
        queryFn: () => query({ page, pageSize, search })
    }); // Retrieve the table page from the backend via the query hook.
    const { mutateAsync: deleteMutation } = useMutation({
        mutationKey: [deleteLibrarianKey],
        mutationFn: deleteLibrarian
    }); // Use a mutation to remove an entry.
    const remove = useCallback(
        (id: string) => deleteMutation(id).then(() => queryClient.invalidateQueries({ queryKey: [queryKey] })),
        [queryClient, deleteMutation, queryKey]); // Create the callback to remove an entry.

    const tryReload = useCallback(
        () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
        [queryClient, queryKey]); // Create a callback to try reloading the data for the table via query invalidation.

    const tableController = useTableController(setPagination, data?.response?.pageSize); // Adapt the pagination for the table.

    return { // Return the controller state and actions.
        ...tableController,
        tryReload,
        pagedData: data?.response,
        isError,
        isLoading,
        remove,
        search,
        setSearchValue,
    };
}