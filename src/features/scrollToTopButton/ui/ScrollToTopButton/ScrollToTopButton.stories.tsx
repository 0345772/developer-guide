import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ScrollToTopButton } from './ScrollToTopButton';

export default {
  title: 'ScrollToTopButton',
  component: ScrollToTopButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ScrollToTopButton>;

const Template: ComponentStory<typeof ScrollToTopButton> = args => (
  <ScrollToTopButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
