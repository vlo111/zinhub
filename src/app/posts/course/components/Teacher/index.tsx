import FormItem from '@/components/form/item';
import { Select } from '@/components/select';

const Teacher = () => {
  const options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'saab', label: 'Saab' },
    { value: 'Saab', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 gap-x-10 mt-14">
      <div className="col-span-2 ">
        <FormItem label="Ընտրել դասավանդող" name="courseSector">
          <Select name="courseTeacher" options={options} />
        </FormItem>
      </div>
    </div>
  );
};

export default Teacher;
