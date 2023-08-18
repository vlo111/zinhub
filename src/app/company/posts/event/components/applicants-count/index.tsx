import Button from '@/components/button';
import { Form } from '@/components/form';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { SubmitHandler } from 'react-hook-form';
import { IFormDAtaModal } from '../../../course/types';

interface IParticipantsCount {
  onSubmit: SubmitHandler<IFormDAtaModal>;
  onClose: () => void;
}

const ApplicantsCount: React.FC<IParticipantsCount> = ({ onSubmit, onClose }) => {
  return (
    <Form onSubmit={onSubmit}>
      <div className="flex flex-col gap-8 items-center w-[70%] justify-center">
        <FormItem label="Դիմածների թիվը" name="participants">
          <Input name="participants" type='number'/>
        </FormItem>
        <FormItem label="Ընդունվածների թիվը" name="completedCourses">
          <Input name="completedCourses" type='number'/>
        </FormItem>
        <div className="flex justify-center gap-6">
          <Button type="secondary" value="Չեղարկել" submit={false} onClick={onClose} />
          <Button type="primary" value="Հաստատել" />
        </div>
      </div>
    </Form>
  );
};

export default ApplicantsCount;
