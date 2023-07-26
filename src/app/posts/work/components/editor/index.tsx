import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import './index.css';

interface ICKEditorComponent {
  name: string;
}

const CKEditorComponent: React.FC<ICKEditorComponent> = ({ name }) => {
  const { register } = useFormContext();

  useEffect(() => {
    register(name);
  });

  return <div className="customStyleEditor"></div>;
};

export default CKEditorComponent;
