import type { Meta, StoryObj } from "@storybook/react";
import Dashboard from "../layouts/Dashboard";

const meta = {
  title: "UI/Layout",
  component: Dashboard,
  tags: ['autodocs'],
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Dashboard: Story = {
  args: {},
};
