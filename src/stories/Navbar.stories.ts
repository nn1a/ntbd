import type { Meta, StoryObj } from '@storybook/react';

import Navbar, { MenuItem } from '../components/Navbar';

const meta = {
  title: 'UI/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems: MenuItem[] = [
  { isBrandItem: true, label: 'MyBrand', href: '/home' },
  { label: 'Home', href: '#', align: 'left' },
  { label: 'About', href: '#', align: 'left' },
  { label: 'Login', onClick: () => console.log('login'), align: 'right' },
  { label: 'Logout', onClick: () => console.log('logout'), align: 'right' },
];

export const _Navbar: Story = {
  args: {
    menuItems: menuItems,
  },
};
