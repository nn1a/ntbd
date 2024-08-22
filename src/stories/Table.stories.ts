import type { Meta, StoryObj } from "@storybook/react";
import Table from "../components/Table";

const meta = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Table: Story = {
  args: {
    data: [
      {
        id: 1,
        name: "John Doe 1",
        email: "",
      },
      {
        id: 1,
        name: "John Doe 2",
        email: "",
      },
    ],
    columns:[
        {
          id: "id",
          header: "Id",
          accessorKey: "id",
          cell: (ctx) => ctx.getValue(),
        },
        {
          id: "name",
          header: "Name",
          accessorKey: "name",
          cell: (ctx) => ctx.getValue(),
        },
        {
          id: "email",
          header: "Email",
          cell: (ctx) => ctx.getValue(),
        },
      ],
  },
};
