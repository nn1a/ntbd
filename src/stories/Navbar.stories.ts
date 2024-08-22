import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/Navbar";

const meta = {
  title: "UI/Navbar",
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Navbar: Story = {
  args: {},
};
