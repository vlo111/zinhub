import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { ZSelect } from '@/components/select';

const JobDetails = () => {
  const options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'saab', label: 'Saab' },
    { value: 'Saab', label: 'Mercedes' },
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
          <Input name="deadline" />
        </FormItem>
        <ZSelect name="duration" label="Տևողությունը" options={options} />
        <ZSelect name="courseRegion" label="Մակարդակ" options={options} />

        <FormItem label="Հասցե" name="address">
          <Input name="address" />
        </FormItem>
        <FormItem label="Աշխատավարձ" name="salary">
          <Input name="salary" />
        </FormItem>
        <ZSelect name="employment" label="Զբաղվածություն" options={options} />
       
        <ZSelect name="region" label="Մարզ" options={options} />
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

{
  /* <FormItem label="Email/գրանցման հղում" name="email1">
            <Input name="email1" />
          </FormItem>
          <FormItem label="Ծրագիր" name="courseProgram">
            <Textarea name="coursePzrogram" />
          </FormItem> */
}
