import { DatePicker } from '@/components/datepicker';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { Select } from '@/components/select';

const JobDetails = () => {
  const options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'saab', label: 'Saab' },
    { value: 'Mercedes', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' },
  ];

  return (
    <div className="flex flex-col gap-4 w-full my-14 ">
      <div className="grid grid-cols-3 gap-4 gap-x-10 ">
        <div className="col-span-2 ">
          <FormItem label="Դասընթացի Անվանումը" name="courseName">
            <Input name="courseName" />
          </FormItem>
        </div>
      </div>
      <div className="grid gap-x-12 gap-y-4 grid-cols-3 w-full">
        <FormItem label="Դիմելու վերջնաժամկետ" name="deadline">
          <DatePicker name="deadline" />
        </FormItem>
        <FormItem label="Տևողությունը" name="courseSector">
          <Select name="duration" options={options} />
        </FormItem>
        <FormItem name="courseRegion" label="Մակարդակ">
          <Select name="courseRegion" options={options} />
        </FormItem>
        <FormItem label="Հասցե" name="address">
          <Input name="address" />
        </FormItem>
        <FormItem label="Աշխատավարձ" name="salary">
          <Input name="salary" />
        </FormItem>
        <FormItem name="employment" label="Զբաղվածություն">
          <Select name="employment" options={options} />
        </FormItem>
        <FormItem name="region" label="Մարզ">
          <Select name="region" options={options} />
        </FormItem>
        <FormItem label="Email/գրանցման հղում" name="email">
          <Input name="email" />
        </FormItem>
        <FormItem label="Հեռախոս" name="phone">
          <Input name="phone" />
        </FormItem>
      </div>
    </div>
  );
};

export default JobDetails;
