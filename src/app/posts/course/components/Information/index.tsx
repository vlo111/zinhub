import { useFieldArray, useForm } from 'react-hook-form';
import Button from '@/components/button';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { Textarea } from '@/components/texarea';
import Row from '../flex/row';
import Grid from '../flex/grid';
import { default as DeleteIcon } from '@/components/icons/delete.svg';

const Information = () => {
  const { control } = useForm();
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'skills',
  });

  const onAddField = (): void => append({});

  return (
    <div className="flex flex-col mb-14">
      <Grid>
        <Row>
          <FormItem label="Email/գրանցման հղում" name="email1">
            <Input name="email1" />
          </FormItem>
        </Row>
        <Row>
          <FormItem label="Ծրագիր" name="courseProgram">
            <Textarea name="coursePzrogram" />
          </FormItem>
        </Row>
      </Grid>
      <div className="grid gap-y-4 gap-x-12 grid-cols-3 w-full mb-6">
        {fields.map(({ id, name }, index) => {
          return (
            <div key={id} className="flex flex-row gap-2 w-full">
              <FormItem label="Ի՞նչ եք սովորելու" name={`skills[${index}].name`}>
                <Input name={`skills[${index}].name`} />
              </FormItem>
              <button
                className="mt-3"
                type="button"
                onClick={() => {
                  remove(index);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          );
        })}
      </div>
      <Button type="secondary" value="+ Ավելացնել դաշտ" onClick={onAddField} className='w-[20%]'/>
    </div>
  );
};

export default Information;
