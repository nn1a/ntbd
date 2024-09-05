import { ColumnDef } from '@tanstack/react-table';
import Table from '../components/Table';
import { useMemo } from 'react';
import Paper from '../components/Paper';
import Box from '../components/Box';

interface Datatypes {
  id: number;
  name: string;
  desc: string;
}

const data: Datatypes[] = Array.from({ length: 31 }, (_v, i) => ({ id: i, name: `John Doe${i}`, desc: 'who?' }));

function TableTest() {
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
        id: 'desc',
        header: 'Desc',
        cell: (ctx) => {
          const { desc } = ctx.row.original;
          return <span className="font-bold">{desc}</span>;
        },
      },
    ],
    []
  );

  return (
    <Paper>
      <Box>
        <Table data={data} columns={columns} className="bg-gray-50" />
      </Box>
    </Paper>
  );
}

export default TableTest;
