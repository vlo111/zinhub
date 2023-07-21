import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { Textarea } from '@/components/texarea';
import { useForm } from 'react-hook-form';
import { FormItems } from '../../form';
import FormItem from '@/components/form/item';
import Grid from '../flex/grid';
import Row from '../flex/row';

const AboutCourse = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormItems>();

  const options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'saab', label: 'Saab' },
    { value: 'mercedes', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' },
  ];
  return (
    <Grid>
      <Row>
        <FormItem label="Դասընթացի Անվանումը" name="courseName">
          <Input name="courseName" />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Ոլորտ" name="courseSector">
          <Select name="courseSector" options={options} />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Դասընթացի մասին" name="aboutCourse">
          <Textarea name="aboutCourse" />
        </FormItem>
      </Row>
    </Grid>
  );
};
<FormItem label="Nor LABEL" name="aboutCourse">
  <Textarea name="aboutCourse" />
</FormItem>;

export default AboutCourse;
