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
        <FormItem label="Դասընթացի մեկնարկը" name="courseStart">
          <DatePicker name="courseStart"/>
        </FormItem>
        <FormItem label="Դասընթացի Տևողությունը" name="courseDuration">
          <Input name="courseDuration" />
        </FormItem>
        <FormItem label="Դասաժամեր" name="classTimes">
          <Input name="classTimes" />
        </FormItem>
        <FormItem label="Դասընթացի Մակարդակ" name="courseSector">
          <Select name="courseLevel" options={options} />
        </FormItem>
        <FormItem label="Դասընթացի անցկացման Լեզու" name="courseSector">
          <Select name="courseLanguage" options={options} />
        </FormItem>
        <FormItem name="courseFormatr" label="Ձևաչափ">
          <Select name="courseFormatr" options={options} />
        </FormItem>
        <FormItem name="courseRegion" label="Մարզ">
          <Select name="courseRegion" options={options} />
        </FormItem>
        <FormItem label="Հասցե" name="courseAddress">
          <Input name="courseAddress" />
        </FormItem>
        <FormItem label="Հեռախոս" name="phoneNumber">
          <Input name="phoneNumber" />
        </FormItem>
      </div>
    </div>
  );
};

export default Contacts;
