import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const primaryArgs = {
  data: {
    username: 'admin',
    age: 55,
    country: Country.Ukraine,
    lastname: 'Stepovoy',
    first: 'Vasya',
    city: 'Kyiv',
    currency: Currency.USD,
    avatar,
  },
};

export const Primary = Template.bind({});
Primary.args = primaryArgs;

export const PrimaryDark = Template.bind({});
PrimaryDark.args = primaryArgs;
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];


export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = primaryArgs;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const PrimaryDarkRedesigned = Template.bind({});
PrimaryDarkRedesigned.args = primaryArgs;
PrimaryDarkRedesigned.decorators = [
  NewDesignDecorator,
  ThemeDecorator(Theme.DARK)
];

const withErrorArgs = {
  error: 'true',
};

export const withError = Template.bind({});
withError.args = withErrorArgs;

export const withErrorRedesigned = Template.bind({});
withErrorRedesigned.args = withErrorArgs;
withErrorRedesigned.decorators = [NewDesignDecorator];

const loadingArgs = {
    isLoading: true,
};

export const Loading = Template.bind({});
Loading.args = loadingArgs;

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = loadingArgs;
LoadingRedesigned.decorators = [NewDesignDecorator];