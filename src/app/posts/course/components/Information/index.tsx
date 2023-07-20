import { ZUploadImage } from '@/app/posts/components/uploadimage';
import Button from '@/components/button';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { Textarea } from '@/components/texarea';
import { useFieldArray, useForm } from 'react-hook-form';

const Information = () => {
  const { control } = useForm();
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'skills',
  });

  const onAddField = (): void => append({});

  return (
    <div className="flex flex-col mb-14">
      <div className="flex flex-row gap-14 w-full mt-14 mb-14">
        <div className="flex flex-col gap-16 w-3/4">
          <FormItem label="Email/գրանցման հղում" name="email1">
            <Input name="email1" />
          </FormItem>
          <FormItem label="Ծրագիր" name="courseProgram">
            <Textarea name="coursePzrogram" />
          </FormItem>
        </div>
        <div className="flex flex-col gap-4 w-1/3">
          <ZUploadImage name="companyName00" label="Ի՞նչ եք սովորելու" />
        </div>
      </div>
      {fields.map(({ id, name }, index) => {
        console.log(id,'<--id', name, '<--name', index, '<--index');
        
        return (
          <div key={id}>
            <FormItem label="Ի՞նչ եք սովորելու" name={`skills[${index}].name`}>
              <Input name={`skills[${index}].name`} />
            </FormItem>
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        );
      })}
      <Button type="secondary" value="+ Ավելացնել դաշտ" onClick={onAddField} />
    </div>
  );
};

export default Information;
