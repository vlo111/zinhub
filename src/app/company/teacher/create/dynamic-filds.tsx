'use client';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { default as DeleteIcon } from '@/components/icons/delete.svg';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

const DynamicFils = () => {
  const { control, setValue, register } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'websites',
  });

  const onAddField = (): void => append({});

  useEffect(() => {
    setValue('websites', [{}]);
  }, [setValue]);

  return (
    <>
      {fields.map(({ id }, index) => {
        return (
          <div key={id} className="flex flex-row gap-2 w-full">
            <FormItem label="Կցել դասավանդողի Սոցիալական կայքերը" name={`websites[${index}].url`}>
              <Input
                name={`websites[${index}].url`}
                validation={register(`websites[${index}].url`, { required: true })}
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
      <div className="w-full flex justify-end">
        {fields.length <= 5 ? (
          <button onClick={onAddField} className="border border-gray rounded-md text-davy-gray px-4 py-2" type='button'>
            + Ավելացնել դաշտ
          </button>
        ) : null}
      </div>
    </>
  );
};

export default DynamicFils;
