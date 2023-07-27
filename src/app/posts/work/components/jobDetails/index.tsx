import Grid from '@/app/posts/course/components/flex/grid';
import Row from '@/app/posts/course/components/flex/row';
import { DatePicker } from '@/components/datepicker';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { IJobDetails } from '../../types';

const JobDetails: React.FC<IJobDetails> = ({ options }) => {
  return (
    <div className="flex flex-col gap-4 w-full my-14 ">
      <Grid>
        <Row>
          <FormItem label="Հայտարարության վերնագիրը" name="title">
            <Input name="title" />
          </FormItem>
        </Row>
        <Row>
          <FormItem name="filedWorkId" label="Ոլորտ">
            <Select name="filedWorkId" options={options?.filedOfWork} />
          </FormItem>
        </Row>
      </Grid>
      <div className="grid gap-x-12 gap-y-4 grid-cols-3 w-full mt-8">
        <FormItem label="Դիմելու վերջնաժամկետ" name="applicationDeadline">
          <DatePicker name="applicationDeadline" />
        </FormItem>
        <FormItem label="Տևողությունը" name="duration">
          <Input name="duration" />
        </FormItem>
        <FormItem name="levelId" label="Մակարդակ">
          <Select name="levelId" options={options?.workLevel} />
        </FormItem>
        <FormItem label="Հասցե" name="location">
          <Input name="location" />
        </FormItem>
        <FormItem label="Աշխատավարձ" name="salary">
          <Input name="salary" />
        </FormItem>
        <FormItem name="employmentId" label="Զբաղվածություն">
          <Select name="employmentId" options={options?.employment} />
        </FormItem>
        <FormItem name="regionId" label="Գտնվելու վայրը (Մարզ)">
          <Select name="regionId" options={options?.regions} />
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
