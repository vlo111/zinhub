import Button from '@/components/button';

export const SubmitButton = () => {
  return (
    <div className="flex gap-8 w-full justify-end mt-14 mb-14">
      <Button className="btn btn--secondary" value="Չեղարկել" submit={false} />
      <Button value="Հաստատել" submit={true} />
    </div>
  );
};
