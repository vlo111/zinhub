import React from 'react';
import { Row } from 'react-table';
import { default as ApproveSvg } from '../../app/admin/requests/@pending/components/icons/approve.svg';
import { default as RejectSvg } from '../../app/admin/requests/@pending/components/icons/reject.svg';
import { DataTableGenericProps, TbodyProps } from '@/components/table/types';

const isDate = (item: string) => item === 'createdAt' || item === 'updatedAt' || item === 'rejectDate';

const Tbody = <T extends DataTableGenericProps>({
  getTableBodyProps,
  rows,
  prepareRow,
  setOpenApprove,
  setOpenReject,
}: TbodyProps<T>) => {
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
              >
                {cell.column.id === 'status' ? (
                  <div className="flex justify-center items-center gap-4">
                    <div className="cursor-pointer" onClick={() => setOpenApprove(row.original.id)}>
                      <ApproveSvg />
                    </div>
                    <div className="cursor-pointer" onClick={() => setOpenReject(row.original.id)}>
                      <RejectSvg />
                    </div>
                  </div>
                ) : isDate(cell.column.id) ? (
                  new Date(cell.value).toLocaleDateString()
                ) : (
                  cell.render('Cell')
                )}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
