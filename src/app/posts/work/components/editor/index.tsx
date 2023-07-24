import React, { useEffect } from 'react';
import './index.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useFormContext } from 'react-hook-form';

interface ICKEditorComponent {
  name: string;
}

const CKEditorComponent: React.FC<ICKEditorComponent> = ({ name }) => {
  const { register, setValue } = useFormContext();

  useEffect(() => {
    register(name);
  });

  return (
    <div className="customStyleEditor">
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: ['bulletedList', 'numberedList', 'todoList', '|', 'undo', 'redo'],
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(name, data);
        }}
      />
    </div>
  );
};

export default CKEditorComponent;
