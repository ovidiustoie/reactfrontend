import { useAppSelector } from "@application/store";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";
import { FeedbackApi, FeedbackDTO, ApiFeedbackGetPageGetRequest, FeedbackUpdateDTO } from "../client";

/**
 * Use constants to identify mutations and queries.
 */
const getFeedbackQueryKey = "getFeedbackQuery";
const getFeedbacksQueryKey = "getFeedbacksQuery";
const addFeedbackMutationKey = "addFeedbackMutation";
const deleteFeedbackMutationKey = "deleteFeedbackMutation";
const updateFeedbackMutationKey = "updateFeedbackMutationKey";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the user API.
 */
export const useFeedbackApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getFeedbacks = (page: ApiFeedbackGetPageGetRequest) => new FeedbackApi(config).apiFeedbackGetPageGet(page); // Use the generated client code and adapt it.
    const getFeedback = (id: string) => new FeedbackApi(config).apiFeedbackGetByIdIdGet({ id });
    const addFeedback = (book: FeedbackDTO) => new FeedbackApi(config).apiFeedbackAddPost({ feedbackDTO: book });
    const deleteFeedback = (id: string) => new FeedbackApi(config).apiFeedbackDeleteIdDelete({ id });
    const updateFeedback = (book:FeedbackUpdateDTO ) => new FeedbackApi(config).apiFeedbackUpdatePut({ feedbackUpdateDTO: book });

    return {
        getFeedbacks: { // Return the query object.
            key: getFeedbacksQueryKey, // Add the key to identify the query.
            query: getFeedbacks // Add the query callback.
        },
        getFeedback: {
            key: getFeedbackQueryKey,
            query: getFeedback
        },
        addFeedback: { // Return the mutation object.
            key: addFeedbackMutationKey, // Add the key to identify the mutation.
            mutation: addFeedback // Add the mutation callback.
        },
        deleteFeedback: {
            key: deleteFeedbackMutationKey,
            mutation: deleteFeedback
        },
        updateFeedback: {
            key: updateFeedbackMutationKey,
            mutation: updateFeedback
        },
    }
}