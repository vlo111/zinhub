import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { ZSelect } from '@/components/select';

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
          <Input name="courseStart" />
        </FormItem>
        <FormItem label="Դասընթացի Տևողությունը" name="courseDuration">
          <Input name="courseDuration" />
        </FormItem>
        <FormItem label="Դասաժամեր" name="classTimes">
          <Input name="classTimes" />
        </FormItem>
        <ZSelect name="courseLevel" label="Դասընթացի Մակարդակ" options={options} />
        <ZSelect name="courseLanguage" label="Դասընթացի անցկացման Լեզու" options={options} />
        <ZSelect name="courseFormatr" label="Ձևաչափ" options={options} />
        <ZSelect name="courseRegion" label="Մարզ" options={options} />
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
