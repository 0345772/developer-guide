import { resolve } from 'path';
import { lazy } from 'react';

<<<<<<< HEAD
export const MainPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./MainPage')), 500);
    }),
);
=======
export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 500);
}));
>>>>>>> main
