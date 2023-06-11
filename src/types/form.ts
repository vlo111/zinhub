import React from 'react';

type PasswordRule = (
  | (({ getFieldValue }: { getFieldValue: (name: string) => string }) => {
      validator(_: { field: string }, value: string): Promise<void>;
    })
  | { required: boolean; message: string; min?: undefined; max?: undefined; pattern?: undefined }
  | object
)[];

type Rules = {
  type?: string;
  required?: boolean;
  message?: string;
  min?: number;
  max?: string;
}[];

export type FormItemProps = React.FC<{ label: string; [p: string]: React.ReactNode | Rules | PasswordRule }>;
