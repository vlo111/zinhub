import { IColumns } from '@/components/table/types';
import { IDataTableStories } from '../../stories/page';
import { default as EditIcon } from '@/components/icons/edit-black.svg';
import { default as DeleteIcon } from '@/components/icons/delete-black.svg';
import { default as RejectSvg } from '../icons/reject.svg';
import { default as SuccessSvg } from '../icons/succiess.svg';

type ColumnsType = (onDelete: (id: string) => void, onEdit: (id: string) => void, onChangeStatus: (id: string, funcStatus: string) => void ) => IColumns<IDataTableStories>[];

export const columns: ColumnsType = (onDelete, onEdit, onChangeStatus) => {
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
        <div className="flex flex-row gap-3 justify-center">
          <button onClick={() => onEdit(row?.id)} className="w-[25px] h-[24px]">
            <EditIcon />
          </button>
          <button onClick={() => onDelete(row?.id)}>
            <DeleteIcon />
          </button>
          {row.status === 'ACTIVE' ? (
            <button onClick={() => onChangeStatus(row?.id, 'activate')}>
              <RejectSvg />
            </button>
          ) : (
            <button onClick={() => onChangeStatus(row?.id, 'passivate')}>
              <SuccessSvg />
            </button>
          )}
        </div>
      )
    }
  ];
};
