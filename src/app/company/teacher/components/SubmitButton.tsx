import Button from '@/components/button';
// import { useFormContext } from 'react-hook-form';

export const SubmitButton = () => {
  // const { handleSubmit } = useFormContext();

  return (
    <div className="flex gap-8 w-full justify-end mt-14 mb-14">
      <Button className="btn btn--secondary" value='Չեղարկել' submit={false}/>
      <Button value='Հաստատել' submit={true}/>
    </div>
  );
};
