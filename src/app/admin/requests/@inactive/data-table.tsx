'use client';
import React from 'react';
import { Column, useTable } from 'react-table';

interface Data {
  name: string;
  tin: string;
  created: string;
  phone: string;
  action: string;
}

const DataTable: React.FC = () => {
  const data: Data[] = React.useMemo(
    () => [
      {
        name: 'Բիզնես Դեվելոփմենթ Գրուպ ',
        tin: 'Ակտիվ',
        created: '2021-02-05 08:28:36',
        phone: '+37498100225',
        action: 'blocked',
      },
      {
        name: 'Բիզնես Դեվելոփմենթ Գրուպ ',
        tin: 'Ակտիվ',
        created: '2021-02-05 08:28:36',
        phone: '+37498100225',
        action: 'blocked',
      },
      {
        name: 'Բիզնես Դեվելոփմենթ Գրուպ ',
        tin: 'Ակտիվ',
        created: '2021-02-05 08:28:36',
        phone: '+37498100225',
        action: 'blocked',
      },
    ],
    []
  );

  // Columns configuration
  const columns: Column<Data>[] = React.useMemo(
    () => [
      { Header: 'Անվանում', accessor: 'name' },
      { Header: 'ՀՎՀՀ', accessor: 'tin' },
      { Header: 'Ստեղծման ամսաթիվ', accessor: 'created' },
      { Header: 'Հեռախոս', accessor: 'phone' },
      { Header: 'Գործողություն', accessor: 'action' },
    ],
    []
  );

  // Create a table instance using react-table hooks
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<Data>({ columns, data });

  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={index}
            className="border-b border-b-[#0000000f] bg-[#0000000f]"
          >
            {headerGroup.headers.map((column) => (
              <th align="left" {...column.getHeaderProps()} key={index} className="p-4">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id} className="border-b border-b-[#0000000f]">
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="p-4" key={index}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
