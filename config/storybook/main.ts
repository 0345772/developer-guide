/* eslint-disable import/no-import-module-exports */

import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { Configuration, DefinePlugin } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options:
          {
              backgrounds: false,
          },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    features: {
        storyStoreV7: true,
    },
    core: {
        builder: {
            name: '@storybook/builder-webpack5',
            options: {
                fsCache: true,
                lazyCompilation: true,
            },
        },
    },
    webpackFinal: async (config: Configuration) => {
        const paths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };
    config!.module!.rules = config!.module!.rules!.map(
    // @ts-ignore
        (rule: RuleSetRule) => {
            if (/svg/.test((rule.test as string))) {
                return {
                    ...rule,
                    exclude: /\.svg$/i,
                };
            }
            return rule;
        },
    );
    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules.push(buildCssLoader(true));
    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://reqres.in'),
        __PROJECT__: JSON.stringify('storybook'),
    }));
    // Return the altered config
    return config;
    },
};
// export const framework = {
//     name: '@storybook/react-vite',
//     options: {},
// };
// export const docs = {
//     autodocs: true,
// };

export default config;
