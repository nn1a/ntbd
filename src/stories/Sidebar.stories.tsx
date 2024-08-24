import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from '../components/Sidebar';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Sidebar: Story = {
  args: {
    menuItems: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'About',
        subItems: [
          {
            label: 'Team',
            href: '/about/team',
          },
        ],
      },
    ],
  },
};
