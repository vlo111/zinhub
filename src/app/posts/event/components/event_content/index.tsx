import Grid from '@/app/posts/course/components/flex/grid';
import Row from '@/app/posts/course/components/flex/row';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { ZSelect } from '@/components/select';
import { Textarea } from '@/components/texarea';
import ReactDatePicker from 'react-datepicker';

const EventContent = () => {
  const options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'saab', label: 'Saab' },
    { value: 'Saab', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' },
  ];

  return (
    <div className="flex flex-col gap-4 w-full my-14 ">
      <Grid>
        <Row>
          <FormItem label="Հայտարարության վերնագիրը" name="postTitle">
            <Input name="courseName" />
          </FormItem>
        </Row>
      </Grid>
      <div className="grid gap-x-12 gap-y-4 grid-cols-3 w-full">
        <FormItem label="Դիմելու վերջնաժամկետ" name="deadline">
          <Input name="deadline" />
        </FormItem>
        <FormItem label="Անցկացման օր" name="startDate">
          <Input name="startDate" />
        </FormItem>
        <FormItem label="Հեռախոս" name="phone">
          <Input name="phone" />
        </FormItem>
        <FormItem label="Հասցե" name="address">
          <Input name="salary" />
        </FormItem>
        <ZSelect name="location" label="Գտնվելու վայրը" options={options} />
      </div>
      <div className="grid grid-cols-3 gap-4 gap-x-10">
        <Row>
          <FormItem label="Email/գրանցման հղում" name="email">
            <Input name="email" />
          </FormItem>
        </Row>
        <Row>
          <FormItem label="Ծրագիր" name="program">
            <Textarea name="program" />
          </FormItem>
        </Row>
        <Row>
          <FormItem label="Ինչ ենք մենք առաջարկում (Ընկերության մասին)" name="aboutCompany">
            <Textarea name="aboutCompany" />
          </FormItem>
        </Row>
      </div>
    </div>
  );
};

export default EventContent;
