import { ICompanyListPending, ICompanyListRejected } from '@/api/company/use-get-all-company';
import React from 'react';
import { HeaderGroup, HeaderPropGetter, Row, TableBodyPropGetter, TableBodyProps } from 'react-table';

export type DataTableGenericProps = ICompanyListPending | ICompanyListRejected;

/* Data Table */
export interface DataTableProps<T> {
  data: T[];
  setOpenApprove: React.Dispatch<React.SetStateAction<string>>;
  setOpenReject: React.Dispatch<React.SetStateAction<string>>;
  column: IColumns<T>[];
}

interface IColumns<T> {
  Header: string;
  accessor: keyof T;
  sortType?: string;
}

/* Table Head */
export type TheadColumn<T extends DataTableGenericProps> = {
  isSorted?: boolean;
  isSortedDesc?: boolean;
  getSortByToggleProps?: (() => void) | undefined;
} & HeaderGroup<T>;

export type TheadCell = React.ThHTMLAttributes<HTMLTableHeaderCellElement>;

export type TheadSort<T extends DataTableGenericProps> = HeaderPropGetter<T> | undefined;

export interface TheadProps<T extends object> {
  headerGroups: HeaderGroup<T>[];
}

/* Table Body */
export type TbodyProps<T extends object> = {
  getTableBodyProps: (propGetter?: TableBodyPropGetter<T> | undefined) => TableBodyProps;
  rows: Row<T>[];
  prepareRow: (row: Row<T>) => void;
  setOpenApprove: React.Dispatch<React.SetStateAction<string>>;
  setOpenReject: React.Dispatch<React.SetStateAction<string>>;
};
