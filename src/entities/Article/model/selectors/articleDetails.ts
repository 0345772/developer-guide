import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) =>
    state.articleDetails?.data;
export const getArticleDetailsError = (state: StateSchema) =>
    state.articleDetails?.error || false;
export const getArticleDetailsIsLoading = (state: StateSchema) =>
    state.articleDetails?.isLoading;
