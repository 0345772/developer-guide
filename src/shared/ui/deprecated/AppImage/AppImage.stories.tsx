import { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AppImage> = {
    title: 'AppImage',
    component: AppImage,
    decorators: [StoreDecorator({})],
};
export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {
    args: {},
    render: () => <AppImage />,
};

// export default {
//     title: 'AppImage',
//     component: AppImage,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as Meta<typeof AppImage>;

// const Template: StoryObj<typeof AppImage> = (args) => (
//     <AppImage {...args} />
// );

// export const Normal = Template.bind({});
// Normal.args = {};

// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

// export const Orange = Template.bind({});
// Orange.args = {};
// Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
