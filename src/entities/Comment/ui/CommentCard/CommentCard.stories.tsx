import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const normalRrgs = {
  comment: {
    id: '1',
    text: 'Hello, frend!',
    user: { id: '1', username: 'Den' },
  },
  isLoading: false,
};

export const Normal = Template.bind({});
Normal.args = normalRrgs;

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = normalRrgs;
NormalRedesigned.decorators = [NewDesignDecorator]


const loadingArgs = {
    comment: {
        id: '1',
        text: 'Hello, my frend!',
        user: { id: '1', username: 'Tony' },
    },
    isLoading: true,
}

export const Loading = Template.bind({});
Loading.args = loadingArgs;

export const  LoadingRedesigned = Template.bind({})
LoadingRedesigned.args =loadingArgs;
LoadingRedesigned.decorators = [NewDesignDecorator]
