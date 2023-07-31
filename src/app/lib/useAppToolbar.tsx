import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';

export function useAppToolbar() {
  const appRoute = useRouteChange();

  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    [AppRoutes.PROFILE]: <div />,
    [AppRoutes.MAIN]: (
      <div
        style={{
          marginTop: '200%',
        }}
      >
        MAIN
      </div>
    ),
    [AppRoutes.ABOUT]: (
      <div
        style={{
          marginTop: '200%',
        }}
      >
        ABOUT
      </div>
    ),
  };

  return toolbarByAppRoute[appRoute];
}
