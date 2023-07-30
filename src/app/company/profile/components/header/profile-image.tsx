import { ChangeEvent, useRef, useState } from 'react';
import { default as UploadSVG } from '../icons/company-upload.svg';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

export const ProfileImage = () => {
  const { register, setValue } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      try {
        const blob = new Blob([selectedFile], { type: selectedFile.type });
        const blobUrl = URL.createObjectURL(blob);
        setPreview(blobUrl);
        setValue('photoItem', event.target.files);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error while creating Blob URL:', error);
      }
    }
  };

  return (
    <>
      <div className="flex items-end gap-4 absolute mt-[-6rem] ml-[3.75rem]">
        <div
          role="presentation"
          onClick={handleUploadClick}
          className="flex justify-center bg-white items-center w-[12rem] h-[12rem] rounded border-[0.5px] border-gray cursor-pointer"
        >
          <input
            className="hidden"
            type="file"
            id="photoItem"
            {...register('photoItem')}
            onChange={handleFileChange}
            ref={(input) => (fileInputRef.current = input)}
          />
          {preview ? (
            <Image
              width={192}
              height={192}
              className="object-cover h-[192px] rounded"
              src={preview}
              alt="File 1 Preview"
            />
          ) : (
            <UploadSVG />
          )}
        </div>
        <span className="text-sm text-davy-gray">Armenian Code Academy</span>
      </div>
    </>
  );
};
