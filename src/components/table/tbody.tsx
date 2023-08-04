import React from 'react';
import { Row } from 'react-table';
import { default as ApproveSvg } from '../../app/admin/requests/@pending/components/icons/approve.svg';
import { default as RejectSvg } from '../../app/admin/requests/@pending/components/icons/reject.svg';
import { default as BlockSvg } from '@/components/icons/block.svg';
import { default as UnBlockSvg } from '@/components/icons/un-block.svg';
import { DataTableGenericProps, TbodyProps } from '@/components/table/types';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/helpers/constants';

const isDate = (item: string) => item === 'createdAt' || item === 'updatedAt' || item === 'rejectDate';

const Tbody = <T extends DataTableGenericProps>({
  getTableBodyProps,
  rows,
  prepareRow,
  setOpenApprove,
  setOpenReject,
}: TbodyProps<T>) => {
  const pathname = usePathname();
  const status = (item: string) => {
    return PATHS.ADMIN_USERS === pathname ? (
      <div className="flex items-center gap-4">
        <div
          className={`rounded-[50px] ${
            item === 'ACTIVE' ? 'bg-[#52C41A]' : item === 'INACTIVE' ? 'bg-[#CDCDCD]' : 'bg-[#FF4D4F]'
          } w-[5px] h-[5px]`}
          onClick={() => setOpenApprove(item)}
        />
        <div>{item === 'ACTIVE' ? 'Ակտիվ' : item === 'INACTIVE' ? 'Չակտիվացված' : 'Արգելափակված'}</div>
      </div>
    ) : (
      <div className="flex justify-center items-center gap-4">
        <div className="cursor-pointer" onClick={() => setOpenApprove(item)}>
          <ApproveSvg />
        </div>
        <div className="cursor-pointer" onClick={() => setOpenReject(item)}>
          <RejectSvg />
        </div>
      </div>
    );
  };

  const checkStatus = (item: string) => (
    <div className="flex justify-center items-center gap-4">
      <div className="cursor-pointer" onClick={() => setOpenApprove(item)}>
        {item === 'ACTIVE' ? <BlockSvg /> : item === 'INACTIVE' ? '' : <UnBlockSvg />}
      </div>
    </div>
  );

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
                {cell.column.id === 'status'
                  ? status(row.original.status)
                  : isDate(cell.column.id)
                  ? new Date(cell.value).toLocaleDateString()
                  : cell.column.id === 'checkstatus'
                  ? checkStatus(cell.value)
                  : cell.render('Cell')}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
