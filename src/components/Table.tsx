import { Fragment, useEffect, useState } from 'react';

import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';

import type { ColumnDef, Row, Table as ReactTable, PaginationState, FilterFn } from '@tanstack/react-table';

import classNames from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Select } from './Select';

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  renderSubComponent?: (props: { row: Row<T> }) => React.ReactElement;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  onPaginationChange?: (pagination: PaginationState) => void;
  className?: string;
}

const dummyFuzzyFilter: FilterFn<unknown> = () => {
  return true;
};

function Table<T extends object>({
  data,
  columns,
  renderSubComponent,
  pageIndex,
  pageSize,
  pageCount,
  onPaginationChange,
  className,
}: ReactTableProps<T>) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: pageIndex ?? 0,
    pageSize: pageSize ?? 10,
  });
  const [globalFilter, setGlobalFilter] = useState<string>('');

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: dummyFuzzyFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    pageCount,
    state: {
      pagination,
      globalFilter,
    },
  });
  useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange(pagination);
    }
  }, [pagination, onPaginationChange]);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-1">
          <div className="overflow-hidden p-1">
            <div className="mb-4 flex justify-between">
              <button className="rounded-md bg-blue-500 px-4 py-2 text-white">Export CSV</button>
              <input
                value={globalFilter || ''}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder="Search..."
                className="rounded-md border border-gray-300 px-4 py-2"
              />
            </div>
            <table className={classNames(`Table min-w-full`, className)}>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        {header.isPlaceholder ? null : (
                          <>{flexRender(header.column.columnDef.header, header.getContext())}</>
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                {table.getRowModel().rows.map((row) => (
                  <Fragment key={row.id}>
                    <tr
                      className={classNames({
                        'dark:bg-black-300 bg-gray-50 transition-colors': row.getIsExpanded(),
                      })}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          style={{
                            width: cell.column.getSize(),
                          }}
                          key={cell.id}
                          className="whitespace-nowrap px-6 py-4"
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>

                    {renderSubComponent ? (
                      <tr key={row.id + '-expanded'}>
                        <td colSpan={columns.length}>{renderSubComponent({ row })}</td>
                      </tr>
                    ) : null}
                  </Fragment>
                ))}
              </tbody>
            </table>
            <Pagination table={table} />
          </div>
        </div>
      </div>
    </div>
  );
}

function getPaginationPages(i: number, n: number) {
  const startPage = Math.max(Math.floor((i - 1) / 10) * 10 + 1, 1);
  return Array.from({ length: 10 }, (_, k) => startPage + k).filter((page) => page >= 1 && page <= n);
}

function Pagination<T>({
  table,
}: React.PropsWithChildren<{
  table: ReactTable<T>;
}>) {
  const pages = getPaginationPages(table.getState().pagination.pageIndex + 1, table.getPageCount());
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="hidden sm:flex sm:flex-1 sm:items-center">
          <p className="px-1 text-sm text-gray-700">
            Page <span className="font-medium">{table.getState().pagination.pageIndex + 1} </span> of{' '}
            <span className="font-medium">{table.getPageCount()}</span>
          </p>
          <span className="px-2 text-sm text-gray-700">| Go to page:</span>
          <input
            type="number"
            value={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="w-16 rounded border p-0 pl-2 text-sm text-gray-700"
          />
        </div>

        <span className="px-2 text-sm text-gray-700">Page Size</span>
        <Select
          options={[10, 20, 30, 40, 50].map((size) => ({ label: `${size}`, value: size }))}
          placeHolder={`${table.getState().pagination.pageSize}`}
          value={table.getState().pagination.pageSize}
          width='w-24'
          onChange={(value) => {
            table.setPageSize(value as number);
          }}
        />
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            {pages.map((item, index) => (
              <button
                aria-current="page"
                key={index}
                onClick={() => table.setPageIndex(item - 1)}
                className={
                  item === table.getState().pagination.pageIndex + 1
                    ? 'relative z-10 inline-flex items-center bg-blue-400 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400'
                    : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                }
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Table;
