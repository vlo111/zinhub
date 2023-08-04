import React from 'react';
import { default as ArrowUpSvg } from '../../app/admin/requests/@pending/components/icons/up.svg';
import { default as ArrowDownSvg } from '../../app/admin/requests/@pending/components/icons/down.svg';
import { default as ArrowTopDownSvg } from '../../app/admin/requests/@pending/components/icons/top-down.svg';
import { DataTableGenericProps, TheadCell, TheadColumn, ITheadProps, TheadSort } from '@/components/table/types';

const Thead = <T extends DataTableGenericProps>({ headerGroups }: ITheadProps<T>) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr
          {...headerGroup.getHeaderGroupProps()}
          key={headerGroup.id}
          className="border-b border-b-[#0000000f] bg-[#0000000f]"
        >
          {headerGroup.headers.map((column: TheadColumn<T>) => (
            <th
              {...(column.id !== 'status'
                ? (column.getHeaderProps(column.getSortByToggleProps as TheadSort<T>) as TheadCell)
                : {})}
              align="left"
              className="p-4 select-none"
              key={column.id}
            >
              <div className="flex items-center gap-2">
                <span>{column.render('Header')}</span>
                <span>
                  {column.id !== 'status' &&
                    (column.isSorted ? column.isSortedDesc ? <ArrowDownSvg /> : <ArrowUpSvg /> : <ArrowTopDownSvg />)}
                </span>
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default Thead;
