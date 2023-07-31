import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { Textarea } from '@/components/texarea';
// import { useForm } from 'react-hook-form';
// import { FormItems } from '../../form';
import FormItem from '@/components/form/item';
import Grid from '../flex/grid';
import Row from '../flex/row';
import { IAboutCourse } from '../../types';

const AboutCourse: React.FC<IAboutCourse> = ({ options }) => {
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm<FormItems>();

  return (
    <Grid>
      <Row>
        <FormItem label="Դասընթացի Անվանումը" name="courseName">
          <Input name="courseName" />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Ոլորտ" name="filedStudyId">
          <Select name="filedStudyId" options={options} />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Դասընթացի մասին" name="courseDescription">
          <Textarea name="courseDescription" />
        </FormItem>
      </Row>
    </Grid>
  );
};

export default AboutCourse;
