import React from 'react';
import { ICompanyList } from '@/api/company/use-get-all-company';
import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table';

const Tbody = ({
  getTableBodyProps,
  rows,
  prepareRow,
}: {
  getTableBodyProps: (propGetter?: TableBodyPropGetter<ICompanyList> | undefined) => TableBodyProps;
  rows: Row<ICompanyList>[];
  prepareRow: (row: Row<ICompanyList>) => void;
}) => {
  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} key={row.id} className="border-b border-b-[#0000000f]">
            {row.cells.map((cell) => (
              <td {...cell.getCellProps()} className="p-4" key={cell.row.id + cell.column.id}>
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
