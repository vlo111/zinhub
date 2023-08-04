import React from 'react';
import { useTable, Column, useSortBy } from 'react-table';
import Thead from '@/components/table/thead';
import Tbody from '@/components/table/tbody';
import { DataTableGenericProps, IDataTableProps, CellRenderer } from '@/components/table/types';

const DataTable = <T extends DataTableGenericProps>({
  data,
  column,
}: // setOpenApprove,
// setOpenReject,
IDataTableProps<T>) => {
  const columns: Column<T>[] = React.useMemo(
    () =>
      column.map((col) => ({
        ...col,
        Cell: col.renderRow
          ? ({ cell, row }: CellRenderer<T>) => col.renderRow?.(row.original)
          : ({ cell }: CellRenderer<T>) => cell.value,
      })),
    [column]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

  return (
    <>
      <table {...getTableProps()} className="w-full">
        <Thead headerGroups={headerGroups} />
        <Tbody
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
          // setOpenApprove={setOpenApprove}
          // setOpenReject={setOpenReject}
        />
      </table>
    </>
  );
};

export default DataTable;
