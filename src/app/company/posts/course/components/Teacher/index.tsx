import FormItem from '@/components/form/item';
import { Select } from '@/components/select';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { default as DeleteIcon } from '@/components/icons/delete.svg';
import Button from '@/components/button';
import { useEffect } from 'react';
import { ITeacher } from '../../types';

const Teacher: React.FC<ITeacher> = ({ options }) => {
  const { control, setValue } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'teacherIds',
  });
  const onAddField = (): void => append({});

  useEffect(() => {
    setValue('teacherIds', [{}]);
  }, [setValue]);
  // const option = [
  //   { value: '8058d060-2c7a-11ee-be56-0242ac120002', label: 'Volvo' },
  //   { value: '862034c0-2c7a-11ee-be56-0242ac120002', label: 'Saab' },
  //   { value: '8e953100-2c7a-11ee-be56-0242ac120002', label: 'Mercedes' },
  //   { value: '93e7db26-2c7a-11ee-be56-0242ac120002', label: 'Audi' },
  // ];

  return (
    <div className="grid grid-cols-3 gap-4 gap-x-10 mt-14">
      <div className="col-span-2 flex gap-6 flex-col">
        {fields.map(({ id }, index) => {
          return (
            <div key={id} className="flex flex-row gap-2 w-full">
              <FormItem label="Ընտրել դասավանդող" name={`teacherIds[${index}]`}>
                <Select name={`teacherIds[${index}]`} options={options} />
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
          <Button type="secondary" value="+ Ավելացնել դաշտ" onClick={onAddField} className="w-[35%]" submit={false}/>
        ) : null}
      </div>
    </div>
  );
};

export default Teacher;

// {fields.map(({ id, name }, index) => {
