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
      <div className="grid grid-cols-3 gap-4 gap-x-10 mt-14">
      <div className="col-span-2 ">
        <Input name="courseName" label="Դասընթացի Անվանումը" />
      </div>
    </div>
      <div className="grid gap-x-12 gap-y-4 grid-cols-3 w-full">
          <Input name="courseStart" label="Դիմելու վերջնաժամկետ" />
          <ZSelect name="courseLevel" label="Տևողությունը" options={options} />
          <ZSelect name="courseRegion" label="Մակարդակ" options={options}/>
          <Input name="courseDuration" label="Հասցե" />
          <Input name="courseLanguage" label="Աշխատավարձ"/>
          <ZSelect name="courseAddress" label="Զբաղվածություն"  options={options}/>
          <ZSelect name="classTimes" label="Մարզ" options={options} />
          <Input name="courseFormatr" label="Email/գրանցման հղում"/>
          <Input name="phoneNumber" label="Հեռախոս" />
      </div>
    </div>
  );
};

export default JobDetails;
