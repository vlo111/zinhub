import React from 'react';
import { HeaderGroup, HeaderPropGetter } from 'react-table';
import { ICompanyList } from '@/api/company/use-get-all-company';
import { default as ArrowUpSvg } from '../icons/up.svg';
import { default as ArrowDownSvg } from '../icons/down.svg';
import { default as ArrowTopDownSvg } from '../icons/top-down.svg';

type Column = {
  isSorted?: boolean;
  isSortedDesc?: boolean;
  getSortByToggleProps?: (() => void) | undefined;
} & HeaderGroup<ICompanyList>;

type Cell = React.ThHTMLAttributes<HTMLTableHeaderCellElement>;

type Sort = HeaderPropGetter<ICompanyList> | undefined;

const Thead = ({ headerGroups }: { headerGroups: HeaderGroup<ICompanyList>[] }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr
          {...headerGroup.getHeaderGroupProps()}
          key={headerGroup.id}
          className="border-b border-b-[#0000000f] bg-[#0000000f]"
        >
          {headerGroup.headers.map((column: Column) => (
            <th
              {...(column.id !== 'status' ? (column.getHeaderProps(column.getSortByToggleProps as Sort) as Cell) : {})}
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
