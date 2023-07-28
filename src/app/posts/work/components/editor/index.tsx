import React, { useEffect } from 'react';
import './index.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Controller, useFormContext } from 'react-hook-form';
import { registers } from '@/helpers/registers';

interface ICKEditorComponent {
  name: string;
}

const CKEditorComponent: React.FC<ICKEditorComponent> = ({ name }) => {
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors?.[name]?.message;

  useEffect(() => {
    register(name);
  });

  return (
    <div className={error ? 'customStyleEditorError' : 'customStyleEditor'}>
      <Controller
        name={name}
        control={control}
        rules={registers?.[name]}
        render={({ field }) => (
          <CKEditor
            {...field}
            editor={ClassicEditor}
            config={{
              toolbar: ['bulletedList'],
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setValue(name, data);
            }}
          />
        )}
      />
    </div>
  );
};

export default CKEditorComponent;
