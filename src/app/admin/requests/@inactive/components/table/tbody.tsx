import React from 'react';
import { ICompanyList } from '@/api/company/use-get-all-company';
import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table';
import { default as ApproveSvg } from '../icons/approve.svg';
import { default as RejectSvg } from '../icons/reject.svg';

type Props = {
  getTableBodyProps: (propGetter?: TableBodyPropGetter<ICompanyList> | undefined) => TableBodyProps;
  rows: Row<ICompanyList>[];
  prepareRow: (row: Row<ICompanyList>) => void;
  setOpenApprove: React.Dispatch<React.SetStateAction<string>>;
  setOpenReject: React.Dispatch<React.SetStateAction<string>>;
};

const Tbody = ({ getTableBodyProps, rows, prepareRow, setOpenApprove, setOpenReject }: Props) => {
  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} key={row.id} className="border-b border-b-[#0000000f]">
            {row.cells.map((cell) => (
              <td {...cell.getCellProps()} className="p-4" key={cell.row.id + cell.column.id}>
                {cell.column.id === 'status' ? (
                  <div className="flex justify-center items-center gap-4">
                    <div className="cursor-pointer" onClick={() => setOpenApprove(row.original.id)}>
                      <ApproveSvg />
                    </div>
                    <div className="cursor-pointer" onClick={() => setOpenReject(row.original.id)}>
                      <RejectSvg />
                    </div>
                  </div>
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
