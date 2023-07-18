import Button from '@/components/button';
import { useFormContext } from 'react-hook-form';

export const SubmitButton: React.FC<{openModal: VoidFunction}> = ({ openModal }) => {
  const { handleSubmit } = useFormContext();

  return (
    <div className="flex gap-8 w-full justify-end mt-14">
      <Button className="btn btn--secondary" value='Դիտել' onClick={handleSubmit(openModal)}/>
      <Button value='Հրապարակել' />
    </div>
  );
};
