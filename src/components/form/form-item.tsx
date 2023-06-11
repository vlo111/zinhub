import React from 'react';
import { Form } from 'antd';
import { FormItemProps } from '@/types/form';

const { Item } = Form;

export const FormItem: FormItemProps = ({ label, ...props }) => (
  <Item className="!mb-0" label={<span className="text-davy-gray text-sm">{label}</span>} {...props} />
);
