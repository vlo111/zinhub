'use client';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import { Input } from '@/components/input';
import { Textarea } from '@/components/texarea';
import { convertFileToBase64 } from '@/helpers/utils';
import { UploadImage } from '../../components/upload-image';
import { SubmitButton } from '../SubmitButton';
import { useParams } from 'next/navigation';
import FormItem from '@/components/form/item';
import Grid from '@/app/company/posts/course/components/flex/grid';
import Row from '@/app/company/posts/course/components/flex/row';
import DynamicFils from '../../create/dynamic-filds';
import useGetTeacherById from '@/api/teacher/get-teacher-by-id';
import useUpdateSingleTeacher from '@/api/teacher/update-teacher-by-id';

export default () => {
  const routs = useRouter();
  const { id } = useParams();
  const convertToBase64 = async (file?: File) => (file ? await convertFileToBase64(file) : undefined);

  const { mutate: updateTeacherById } = useUpdateSingleTeacher({
    onSuccess: () => {
      routs.push('/company/teacher');
    },
  });

  const {
    data: { result },
    isLoading,
  } = useGetTeacherById(id, true);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const photoBase64 = await convertToBase64(data.photoItem?.[0]);
    updateTeacherById({
      id: id,
      teacherData: {
        fullName: data.fullName,
        profession: data.profession,
        experience: data.experience,
        photo: photoBase64,
        websites: {
          link: data.websites,
        },
      },
    });
  };

  const goBack = () => {
    routs.push('/company/teacher');
  };

  return (
    <>
      {!isLoading ? (
        <Form onSubmit={onSubmit} defaultValues={{ ...result }}>
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
              <FormItem label="Կցել դասավանդողի լուսանկարը" name="photoItem">
                <UploadImage defaultImage={result?.photo} />
              </FormItem>
            </Row>
            <Row>
              <SubmitButton goBack={goBack} />
            </Row>
          </Grid>
        </Form>
      ) : (
        <div>...loading</div>
      )}
    </>
  );
};
