import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';

const meta = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Select: Story = {
  args: {
    label: 'select...',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    value: '1',
    onChange: (value: string | number) => console.log(value),
  },
};

export const SelectWithoutLabel: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    value: '1',
    onChange: (value: string | number) => console.log(value),
  },
};
