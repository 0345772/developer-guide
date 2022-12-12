import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(RouteConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className="page-wrapper">{element}</div>}
                />
            ))}
        </Routes>
    </Suspense>
);
