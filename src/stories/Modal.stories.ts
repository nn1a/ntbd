import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/Modal';

const meta = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Modal: Story = {
  args: {},
};
