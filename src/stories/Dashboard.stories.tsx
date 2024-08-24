import type { Meta, StoryObj } from '@storybook/react';
import Dashboard from '../layouts/Dashboard';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Layout/Dashboard',
  component: Dashboard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Dashboard: Story = {
  args: {},
};
