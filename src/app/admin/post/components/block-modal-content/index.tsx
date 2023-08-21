import { IRejectionModalData } from '@/app/company/posts/course/types';
import { Textarea } from '@/components/texarea';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import Button from '@/components/button';
import FormItem from '@/components/form/item';

interface IBlockModalContent {
  onGoBack: () => void;
  onSubmit: SubmitHandler<IRejectionModalData>;
}

const BlockModalContent: React.FC<IBlockModalContent> = ({ onGoBack, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <div className="w-[70%]">
        <FormItem label="Նշել արգելափակման պատճառը" name="rejectionText">
          <Textarea name="rejectionText" />
        </FormItem>
      </div>
      <div className="flex flex-row gap-10">
        <Button value={'Չեղարկել'} type="secondary" onClick={onGoBack} submit={false} />
        <Button value={'Արգելափակել'} />
      </div>
    </Form>
  );
};

export default BlockModalContent;
