import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: { ApplinkVariant: 'primary' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  variant: 'secondary',
};

export const Red = Template.bind({});
Red.args = {
  children: 'Text',
  variant: 'red',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  variant: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  variant: 'secondary',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
  children: 'Text',
  variant: 'red',
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
  children: 'Text',
  variant: 'primary',
};
PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const SecondaryOrange = Template.bind({});
SecondaryOrange.args = {
  children: 'Text',
  variant: 'secondary',
};
SecondaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const RedOrange = Template.bind({});
RedOrange.args = {
  children: 'Text',
  variant: 'red',
};
RedOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
