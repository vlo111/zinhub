import { default as UploadBGSVG } from '../icons/company-upload-bg.svg';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { FileInput } from '@/components/input/file-input';

export const BackgroundImage = ({ defaultImage }: { defaultImage: string }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
        <FileInput container={fileInputRef} setPreview={setPreview} name="backgroundPhotoItem" />
      </div>
      {preview ? (
        <Image
          width={900}
          height={400}
          className="max-h-[400px] object-cover w-full"
          src={preview}
          alt="Background Profile Preview"
        />
      ) : (
        <Image
          width={900}
          height={400}
          className="xs:h-[200px] max-h-[400px] w-full object-cover"
          src={defaultImage}
          alt="Picture of the company"
        />
      )}
    </>
  );
};
