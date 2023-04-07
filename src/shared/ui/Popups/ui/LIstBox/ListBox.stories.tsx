import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: '100px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;
export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        { content: 'jkl4567', value: '123' },
        { content: '8765ghjhgvbn', value: '456' },
        { content: 'brseAART5', value: '789' },
        { content: 'Dey', value: '919' },
    ],
};
export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: 'jkl4567', value: '123' },
        { content: '8765ghjhgvbn', value: '456' },
        { content: 'brseAART5', value: '789' },
        { content: 'Dey', value: '919' },
    ],
};
export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: 'jkl4567', value: '123' },
        { content: '8765ghjhgvbn', value: '456' },
        { content: 'brseAART5', value: '789' },
        { content: 'Dey', value: '919' },
    ],
};
export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        { content: 'jkl4567', value: '123' },
        { content: '8765ghjhgvbn', value: '456' },
        { content: 'brseAART5', value: '789' },
        { content: 'Dey', value: '919' },
    ],
};
