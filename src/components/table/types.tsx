import { ICompanyListPending, ICompanyListRejected } from '@/api/company/use-get-all-company';
import { IDataTablePostsAdmin } from '@/app/admin/announcements/@all/page';
import { ITableData } from '@/app/company/teacher/types';
import React from 'react';
import { Cell, HeaderGroup, HeaderPropGetter, Row, TableBodyPropGetter, TableBodyProps } from 'react-table';

export type DataTableGenericProps = ICompanyListPending | ICompanyListRejected | ITableData | IDataTablePostsAdmin;

/* Data Table */
export interface IColumns<T> {
  Header: string;
  accessor: keyof T;
  sortType?: string;
  renderRow?: (row: T) => React.ReactNode;
}

export interface IDataTableProps<T extends object> {
  data: T[];
  column: IColumns<T>[];
  onRowClick?: (row: T) => void;
}

export type CellRenderer<T extends object> = {
  cell: Cell<T>;
  row: Row<T>;
};

/* Table Head */
export type TheadColumn<T extends DataTableGenericProps> = {
  isSorted?: boolean;
  isSortedDesc?: boolean;
  sortType?: string;
  getSortByToggleProps?: (() => void) | undefined;
} & HeaderGroup<T>;

export type TheadCell = React.ThHTMLAttributes<HTMLTableHeaderCellElement>;

export type TheadSort<T extends DataTableGenericProps> = HeaderPropGetter<T> | undefined;

export interface ITheadProps<T extends object> {
  headerGroups: HeaderGroup<T>[];
}

/* Table Body */
export type TbodyProps<T extends object> = {
  getTableBodyProps: (propGetter?: TableBodyPropGetter<T> | undefined) => TableBodyProps;
  rows: Row<T>[];
  prepareRow: (row: Row<T>) => void;
  onRowClick?: (row: T) => void;
};
