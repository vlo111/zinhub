import React from 'react';
import { Input as InputComponent } from 'antd';

export const Input = ({ ...props }) => <InputComponent className="rounded-md border-gray h-10" {...props} />;

export const Password = ({ ...props }) => (
  <InputComponent.Password className="rounded-md border-gray h-10" {...props} />
);
