import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/tests/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailsPage.module.scss';
import {
    articleDetailsCommentReducer,
    getArticleComments,
} from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
    articleDetailsPageRecommendationsReducer,
    getArticleRecommendations,
} from '../../model/slice/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(
        getArticleRecommendationsIsLoading,
    );
    const CommentsisLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t('Рекомендуем')}
                    />
                    <ArticleList
                        articles={recommendations}
                        isLoading={recommendationsIsLoading}
                        className={cls.recommendations}
                        target="_blank"
                    />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t('Комментарии')}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList
                        isLoading={CommentsisLoading}
                        comments={comments}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
