import React from 'react';
import { useFormContext } from 'react-hook-form';
import { default as AddPhotoIcon } from '@/components/icons/add-photoIcon.svg';

export interface IZInput {
  name: string;
  label: string;
}

export const ZUploadImage: React.FC<IZInput> = ({ name, label }) => {
  const { register } = useFormContext(); // Retrieve the form methods from useFormContext

  return (
    <div className="flex justify-center w-full flex-col">
      <label className="block mb-2 text-sm md:text-xs font-medium text-gray-900 dark:text-white text-davy-gray">{label}</label>
      <label className="flex flex-col items-center justify-center w-full h-64 border border-gray rounded-lg cursor-pointer ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <AddPhotoIcon />
        </div>
        <input id="dropzone-file" type="file" className="hidden" {...register(name)} />
      </label>
    </div>
  );
};
