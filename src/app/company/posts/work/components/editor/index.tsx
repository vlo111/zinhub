import React, { useEffect } from 'react';
import './index.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Controller, useFormContext } from 'react-hook-form';
import { registers } from '@/helpers/registers';

interface ICKEditorComponent {
  name: string;
  fieldName: string;
}

const CKEditorComponent: React.FC<ICKEditorComponent> = ({ name, fieldName }) => {
  const {
    register,
    setValue,
    control,
    formState: { errors },
    setError,
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
              if (data.length > 0) {
                setError(name, {});
              } else {
                setError(name, { message: `${fieldName} դաշտը պարտադիր է`, type: 'required' });
              }
              setValue(name, data);
            }}
          />
        )}
      />
    </div>
  );
};

export default CKEditorComponent;
