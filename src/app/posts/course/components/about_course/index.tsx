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
        <FormItem label="Դասընթացի Անվանումը" name="title">
          <Input name="title" />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Ոլորտ" name="filedStudyId">
          <Select name="filedStudyId" options={options} />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Դասընթացի մասին" name="description">
          <Textarea name="description" />
        </FormItem>
      </Row>
    </Grid>
  );
};

export default AboutCourse;
