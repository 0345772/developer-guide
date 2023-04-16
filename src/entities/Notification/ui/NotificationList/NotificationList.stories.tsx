import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'notiaication-1',
                    description: 'Поставьте лайк и оставьте комментарий',
                },
                {
                    id: '2',
                    title: 'notiaication-2',
                    description: 'Поставьте лайк и оставьте комментарий',
                },
                {
                    id: '3',
                    title: 'notiaication-3',
                    description: 'Поставьте лайк и оставьте комментарий',
                },
            ],
        },
    ],
};

// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

// export const Orange = Template.bind({});
// Orange.args = {};
// Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
