'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Form } from '@/components/form';
import Grid from '../../posts/course/components/flex/grid';
import Row from '../../posts/course/components/flex/row';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { Textarea } from '@/components/texarea';
import { SubmitButton } from '../components/SubmitButton';
import { UploadImage } from '../components/upload-image';
import { convertFileToBase64 } from '@/helpers/utils';
import useCreateTeacher from '@/api/create-teacher';
import DynamicFils from './dynamic-filds';
import { useRouter } from 'next/navigation';

export type FormItems = {
  phone: string;
  email: string;
  address: string;
  about: string;
  value: string;
};

export default () => {
  const { watch } = useForm();
  const routs = useRouter();
  const convertToBase64 = async (file?: File) => (file ? await convertFileToBase64(file) : undefined);
  const { mutate: createTeacherFn } = useCreateTeacher({
    onSuccess: () => {
      routs.push('/company/teacher');
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const photoBase64 = await convertToBase64(data.photoItem?.[0]);
    createTeacherFn({
      fullName: data.fullName,
      profession: data.profession,
      experience: data.experience,
      photo: photoBase64,
      websites: {
        link: data.websites,
      },
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Grid>
        <Row>
          <FormItem label="Դասավանդողի անունը, ազգանունը" name="fullName">
            <Input name="fullName" />
          </FormItem>
        </Row>
        <Row>
          <FormItem label="Դասավանդողի մասնագիտությունը" name="profession">
            <Input name="profession" />
          </FormItem>
        </Row>
        <Row>
          <FormItem label="Դասավանդողի մասնագիտություն, աշխատանքային փորձը (կարճ բնութագիր)" name="experience">
            <Textarea name="experience" />
          </FormItem>
        </Row>
        <Row>
          <DynamicFils />
        </Row>
        <Row>
          <FormItem label="Կցել դասավանդողի լուսանկարը" name="">
            <UploadImage defaultImage={watch('photo')} />
          </FormItem>
        </Row>
        <Row>
          <SubmitButton />
        </Row>
      </Grid>
    </Form>
  );
};
