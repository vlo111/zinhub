import React from 'react';
import { Row } from 'react-table';
import { DataTableGenericProps, TbodyProps } from '@/components/table/types';

const Tbody = <T extends DataTableGenericProps>({ getTableBodyProps, rows, prepareRow, onRowClick }: TbodyProps<T>) => {
  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row: Row<T>) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} key={row.id} className="border-b border-b-[#0000000f]">
            {row.cells.map((cell) => (
              <td
                {...cell.getCellProps()}
                className="p-4 max-w-[40px] overflow-hidden overflow-ellipsis"
                key={cell.row.id + cell.column.id}
                onClick={() => {
                  if (cell.column.id === 'event') {
                    return;
                  } else {
                    return onRowClick && onRowClick(row?.original as T);
                  }
                }}
              >
                {cell.render('Cell')}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
