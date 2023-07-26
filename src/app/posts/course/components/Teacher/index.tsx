import FormItem from '@/components/form/item';
import { Select } from '@/components/select';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { default as DeleteIcon } from '@/components/icons/delete.svg';
import Button from '@/components/button';
import { useEffect } from 'react';

const Teacher = () => {
  const { control, setValue } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'teacherId',
  });
  const onAddField = (): void => append({});
  const options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'saab', label: 'Saab' },
    { value: 'Saab', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' },
  ];

  useEffect(() => {
    setValue('teacherId', [{}]);
  }, [setValue]);

  return (
    <div className="grid grid-cols-3 gap-4 gap-x-10 mt-14">
      <div className="col-span-2 flex gap-6 flex-col">
        {fields.map(({ id, name }, index) => {
          return (
            <div key={id} className="flex flex-row gap-2 w-full">
              <FormItem label="Ընտրել դասավանդող" name={`teacherId[${index}]`}>
                <Select name={`teacherId[${index}]`} options={options} />
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
        {fields.length < 5 ? (
          <Button type="secondary" value="+ Ավելացնել դաշտ" onClick={onAddField} className="w-[35%]" />
        ) : null}
      </div>
    </div>
  );
};

export default Teacher;
