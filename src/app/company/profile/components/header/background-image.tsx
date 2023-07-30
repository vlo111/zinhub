import CompanyURL from '../icons/company-default-bg.png';
import { default as UploadBGSVG } from '../icons/company-upload-bg.svg';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { ChangeEvent, useRef, useState } from 'react';

export const BackgroundImage = () => {
  const { register, setValue } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewImage1, setPreviewImage1] = useState<string | null>(null);

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
        setPreviewImage1(blobUrl);
        setValue('backgroundPhotoItem', event.target.files);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error while creating Blob URL:', error);
      }
    }
  };

  return (
    <>
      <div
        role="presentation"
        className="flex gap-2 absolute right-2 top-2 bg-white p-3 rounded border-[0.5px] border-gray cursor-pointer"
        onClick={handleUploadClick}
      >
        <UploadBGSVG />
        <label className="font-bold cursor-pointer">Ավելացնել ետնանկար</label>
        <input
          className="hidden"
          type="file"
          id="backgroundPhotoItem"
          {...register('backgroundPhotoItem')}
          onChange={handleFileChange}
          ref={(input) => (fileInputRef.current = input)}
        />
      </div>
      {previewImage1 ? (
        <Image
          width={900}
          height={400}
          className="max-h-[400px] object-cover w-full"
          src={previewImage1}
          alt="File 1 Preview"
        />
      ) : (
        <Image className="xs:h-[200px] max-h-[400px]" src={CompanyURL} alt="Picture of the company" />
      )}
    </>
  );
};
