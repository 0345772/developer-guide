import { resolve } from 'path';
import { lazy } from 'react';

export const LoaderAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./Loader')), 5);
    }),
);
