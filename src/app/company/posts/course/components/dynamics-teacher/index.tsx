'use client';
import { useEffect } from 'react';
import { Select } from '@/components/select';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ITeacher } from '../../types';
import FormItem from '@/components/form/item';
import Button from '@/components/button';
import { default as DeleteIcon } from '@/components/icons/delete.svg';

const DynamicsTeacher: React.FC<ITeacher> = ({ options, edit = false }) => {
  const { control, setValue } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'teacherIds',
  });
  const onAddField = (): void => append({});
  const teacherOptions = options?.map((teacher) => {
    return {
      ...teacher,
      label: teacher?.fullName,
      value: teacher?.id,
      icon: teacher?.photo,
    };
  });

  useEffect(() => {
    if (!edit) {
      setValue('teacherIds', [{}]);
    }
  }, [edit, setValue]);

  return (
    <div className="grid grid-cols-3 gap-4 gap-x-10 mt-8 w-full">
      <div className="col-span-2 flex gap-6 flex-col">
        {fields.map(({ id }, index) => {
          return (
            <div key={id} className="flex flex-row gap-2 w-full">
              <FormItem label="Ընտրել դասավանդող" name={`teacherIds[${index}]`}>
                <Select name={`teacherIds[${index}]`} options={teacherOptions} />
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
          <Button type="secondary" value="+ Ավելացնել դաշտ" onClick={onAddField} className="w-[35%]" submit={false} />
        ) : null}
      </div>
    </div>
  );
};

export default DynamicsTeacher;
