import { Modal } from 'antd';
import { AxiosError } from 'axios';
import { CustomError } from '@/api/types';

export const errorMessage = (er: unknown) => {
  Modal.error({
    title: 'Error',
    content: (er as AxiosError<CustomError>).response?.data.message,
    footer: false,
    closable: true,
  });
};
