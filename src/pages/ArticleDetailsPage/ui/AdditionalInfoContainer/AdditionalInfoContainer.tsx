import { getArticleDetailsData } from '@/entities/Article';
import { User } from '@/entities/User';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import cls from './AdditionalInfoContainer.module.scss';
import { useNavigate } from 'react-router-dom';
import { getRouteArticleEdit } from '@/shared/const/router';

export const AdditionalInfoContainer = memo(() => {
  const article = useSelector(getArticleDetailsData);
  const navigate = useNavigate();
  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [navigate, article]);

  if (!article) {
    return null;
  }

  return (
    <Card padding="24" border="round" className={cls.card}>
      <ArticleAdditionalInfo
        author={article.user}
        createdAt={article?.createdAt}
        views={article.views}
        onEdit={onEditArticle}
      />
    </Card>
  );
});