import { memo, useCallback } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useSelector } from 'react-redux';
import { ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo(
  (props: ViewSelectorContainerProps) => {
    const { className } = props;

    const { view, onChangeView } = useArticleFilters();
    return (
      <ArticleViewSelector
        className={className}
        view={view}
        onViewClick={onChangeView}
      />
    );
  },
);
