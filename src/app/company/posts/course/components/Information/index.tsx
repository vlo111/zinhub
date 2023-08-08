import { useFieldArray, useFormContext } from 'react-hook-form';
import Button from '@/components/button';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { Textarea } from '@/components/texarea';
import Row from '../flex/row';
import Grid from '../flex/grid';
import { default as DeleteIcon } from '@/components/icons/delete.svg';
import { useEffect } from 'react';

const Information: React.FC<{ edit?: boolean }> = ({ edit = false }) => {
  const { control, setValue, register } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'topics',
  });

  const onAddField = (): void => append({});

  useEffect(() => {
    if (!edit) {
      setValue('topics', [{}]);
    }
  }, [setValue]);

  return (
    <div className="flex flex-col mb-14">
      <Grid>
        <Row>
          <FormItem label="Email/գրանցման հղում" name="email">
            <Input name="email" />
          </FormItem>
        </Row>
        <Row>
          <FormItem label="Ծրագիր" name="program">
            <Textarea name="program" />
          </FormItem>
        </Row>
      </Grid>
      <div className="grid gap-y-4 gap-x-12 grid-cols-3 w-full mb-6">
        {fields.map(({ id }, index) => {
          return (
            <div key={id} className="flex flex-row gap-2 w-full">
              <FormItem label="Ի՞նչ եք սովորելու" name={`topics[${index}].name`}>
                <Input
                  name={`topics[${index}].name`}
                  validation={register(`topics[${index}].name`, { required: true })}
                />
              </FormItem>
              {fields.length > 1 ? (
                <button
                  className="mt-[14px]"
                  type="button"
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <DeleteIcon />
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
      {fields.length <= 15 ? (
        <Button type="secondary" value="+ Ավելացնել դաշտ" onClick={onAddField} className="w-[20%]" submit={false} />
      ) : null}
    </div>
  );
};

export default Information;
