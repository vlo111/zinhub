import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction } from 'react';
import { useFormContext } from 'react-hook-form';

export const FileInput = ({
  container,
  name,
  setPreview,
}: {
  container: MutableRefObject<HTMLInputElement | null>;
  setPreview: Dispatch<SetStateAction<string | null>>;
  name: string;
}) => {
  const { register, setValue } = useFormContext();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      try {
        const blob = new Blob([selectedFile], { type: selectedFile.type });
        const blobUrl = URL.createObjectURL(blob);
        setPreview(blobUrl);
        setValue(name, event.target.files);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error while creating Blob URL:', error);
      }
    }
  };

  return (
    <>
      <input
        className="hidden"
        type="file"
        id={name}
        {...register(name)}
        onChange={handleFileChange}
        ref={(input) => (container.current = input)}
      />
    </>
  );
};
