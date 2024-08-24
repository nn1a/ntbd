import { ColumnDef } from '@tanstack/react-table';
import Page from '../components/Page';
import Table from '../components/Table';
import { useMemo } from 'react';

interface Datatypes {
  id: number;
  name: string;
  email: string;
}

function Home() {
  const data: Datatypes[] = [];
  for (let i = 0; i < 31; i++) {
    data.push({
      id: i,
      name: 'John Doe' + i,
      email: '',
    });
  }

  const columns = useMemo<ColumnDef<Datatypes>[]>(
    () => [
      {
        id: 'id',
        header: 'Id',
        accessorKey: 'id',
        cell: (ctx) => ctx.getValue(),
      },
      {
        id: 'name',
        header: 'Name',
        accessorKey: 'name',
        cell: (ctx) => ctx.getValue(),
      },
      {
        id: 'email',
        header: 'Email',
        cell: (ctx) => {
          const { email } = ctx.row.original;

          return <span className="font-bold">{email}</span>;
        },
      },
    ],
    []
  );
  return (
    <Page>
      <Table data={data} columns={columns} className="bg-gray-50" />
    </Page>
  );
}

export default Home;
