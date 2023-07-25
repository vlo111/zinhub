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
          <FormItem label="Հայտարարության վերնագիրը" name="title">
            <Input name="title" />
          </FormItem>
        </div>
      </div>
      <div className="grid gap-x-12 gap-y-4 grid-cols-3 w-full">
        <FormItem label="Դիմելու վերջնաժամկետ" name="applicationDeadline">
          <DatePicker name="applicationDeadline" />
        </FormItem>
        <FormItem label="Տևողությունը" name="duration">
          <Select name="duration" options={options} />
        </FormItem>
        <FormItem name="levelId" label="Մակարդակ">
          <Select name="levelId" options={options} />
        </FormItem>
        <FormItem label="Հասցե" name="location">
          <Input name="location" />
        </FormItem>
        <FormItem label="Աշխատավարձ" name="salary">
          <Input name="salary" />
        </FormItem>
        <FormItem name="employmentId" label="Զբաղվածություն">
          <Select name="employmentId" options={options} />
        </FormItem>
        <FormItem name="regionId" label="Մարզ">
          <Select name="regionId" options={options} />
        </FormItem>
        <FormItem label="Email/գրանցման հղում" name="registrationLink">
          <Input name="registrationLink" />
        </FormItem>
        <FormItem label="Հեռախոս" name="phone">
          <Input name="phone" />
        </FormItem>
      </div>
    </div>
  );
};

export default JobDetails;
