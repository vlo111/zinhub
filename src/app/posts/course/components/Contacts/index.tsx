import { DatePicker } from '@/components/datepicker';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { Select } from '@/components/select';

const Contacts = () => {
  const options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'saab', label: 'Saab' },
    { value: 'Saab', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' },
  ];

  return (
    <div className="flex flex-col gap-4 w-full my-14 ">
      <div className="grid gap-x-12 gap-y-4 grid-cols-3 w-full">
        <FormItem label="Դասընթացի մեկնարկը" name="startDate">
          <DatePicker name="startDate" />
        </FormItem>
        <FormItem label="Դասընթացի Տևողությունը" name="courseDuration">
          <Input name="courseDuration" />
        </FormItem>
        <FormItem label="Դասաժամեր" name="classHours">
          <Input name="classHours" />
        </FormItem>
        <FormItem label="Դասընթացի Մակարդակ" name="levelId">
          <Select name="levelId" options={options} />
        </FormItem>
        <FormItem label="Դասընթացի անցկացման Լեզու" name="languageId">
          <Select name="languageId" options={options} />
        </FormItem>
        <FormItem label="Ձևաչափ" name="formatId">
          <Select name="formatId" options={options} />
        </FormItem>
        <FormItem label="Մարզ" name="regionId">
          <Select name="regionId" options={options} />
        </FormItem>
        <FormItem label="Հասցե" name="location">
          <Input name="location" />
        </FormItem>
        <FormItem label="Հեռախոս" name="phone">
          <Input name="phone" />
        </FormItem>
      </div>
    </div>
  );
};

export default Contacts;
