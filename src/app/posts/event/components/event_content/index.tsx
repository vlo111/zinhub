import Grid from '@/app/posts/course/components/flex/grid';
import Row from '@/app/posts/course/components/flex/row';
import { DatePicker } from '@/components/datepicker';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { Textarea } from '@/components/texarea';

const EventContent = () => {
  const options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'saab', label: 'Saab' },
    { value: 'Saab', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' },
  ];

  return (
    <div className="flex flex-col gap-4 w-full ">
      <Grid>
        <Row>
          <FormItem label="Հայտարարության վերնագիրը" name="title">
            <Input name="title" />
          </FormItem>
        </Row>
      </Grid>
      <div className="grid gap-x-12 gap-y-4 grid-cols-3 w-full">
        <FormItem label="Դիմելու վերջնաժամկետ" name="applicationDeadline">
          <DatePicker name="applicationDeadline" />
        </FormItem>
        <FormItem label="Անցկացման օր" name="startDate">
          <DatePicker name="startDate" />
        </FormItem>
        <FormItem label="Հեռախոս" name="phone">
          <Input name="phone" />
        </FormItem>
        <FormItem label="Հասցե" name="location">
          <Input name="location" />
        </FormItem>
        <FormItem name="regionId" label="Գտնվելու վայրը/Մարզ">
          <Select name="regionId" options={options} />
        </FormItem>
      </div>
      <div className="grid grid-cols-3 gap-4 gap-x-10">
        <Row>
          <FormItem label="Email/գրանցման հղում" name="registrationLink">
            <Input name="registrationLink" />
          </FormItem>
        </Row>
        <Row>
          <FormItem label="Ծրագիր" name="program">
            <Textarea name="program" />
          </FormItem>
        </Row>
        <Row>
          <FormItem label="Ինչ ենք մենք առաջարկում (Ընկերության մասին)" name="whatWeOffer">
            <Textarea name="whatWeOffer" />
          </FormItem>
        </Row>
      </div>
    </div>
  );
};

export default EventContent;
