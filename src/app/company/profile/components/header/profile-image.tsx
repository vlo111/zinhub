import { useRef, useState } from 'react';
import { default as UploadSVG } from '../icons/company-upload.svg';
import Image from 'next/image';
import { FileInput } from '@/components/input/file-input';

export const ProfileImage = ({ defaultImage }: { defaultImage: string | null }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
          <FileInput name="photoItem" container={fileInputRef} setPreview={setPreview} />
          {preview ? (
            <Image
              width={192}
              height={192}
              className="object-cover h-[192px] rounded"
              src={preview}
              alt="Profile Preview"
            />
          ) : defaultImage ? (
            <Image
              width={192}
              height={192}
              className="object-cover h-[192px] rounded"
              src={defaultImage}
              alt="Profile Preview"
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
