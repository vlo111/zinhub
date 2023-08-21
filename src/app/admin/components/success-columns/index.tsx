import { IColumns } from '@/components/table/types';
import { IDataTableStories } from '../../stories/page';
import { default as EditIcon } from '@/components/icons/edit-black.svg';
import { default as DeleteIcon } from '@/components/icons/delete-black.svg';

type ColumnsType = (onDelete: (id: string) => void, onEdit: (id: string) => void) => IColumns<IDataTableStories>[];

export const columns: ColumnsType = (onDelete, onEdit) => {
  return [
    { Header: 'Վերնագիր', accessor: 'successTitle', sortType: '' },
    {
      Header: 'Կարգավիճակ',
      accessor: 'status',
      sortType: 'status',
    },
    {
      Header: 'Ստեղծման ամսաթիվ',
      accessor: 'createdAt',
      sortType: 'createdAt',
      renderRow: (row) => <div>{new Date(row.createdAt ?? '').toLocaleDateString()}</div>,
    },
    {
      Header: 'Հրապարակման ամսաթիվ',
      accessor: 'updatedAt',
      sortType: 'updatedAt',
      renderRow: (row) => <div>{new Date(row.updatedAt ?? '').toLocaleDateString()}</div>,
    },
    {
      Header: 'Ում կողմից',
      accessor: 'adminName',
      sortType: '',
    },
    {
      Header: 'Գործողություն',
      accessor: 'event',
      sortType: '',
      renderRow: (row) => (
        <div className="flex flex-row gap-3 justify-center relative bottom-3 left-3">
          <button
            onClick={(e) => {
              e.preventDefault()
              return onEdit(row?.id);
            }}
            className="absolute z-100 left-16 w-[25px] h-[24px]"
          >
            <EditIcon />
          </button>
          <button
            className="absolute z-100 left-5 top-0"
            onClick={(e) => {
              e.preventDefault();
              return onDelete(row?.id);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];
};
