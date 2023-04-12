export {
    ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export type { ArticleDetailsRecommendationsSchema } from './model/types/articleDetailsRecommendationsSchema';
export type { ArticleDetailsPageSchema } from './model/types';

export {
    getArticleRecommendations,
    articleDetailsPageRecommendationsReducer,

} from './model/slice/articleDetailsPageRecommendationsSlice';

export {
    articleDetailsPageReducer,
} from './model/slice';
