'use client';
import { useState } from 'react';
import { convertFileToBase64 } from '@/helpers/utils';
import { useParams, useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { SubmitButton } from './SubmitButton';
import { Form } from '@/components/form';
import { Input } from '@/components/input';
import { Textarea } from '@/components/texarea';
import { UploadImage } from '@/app/company/teacher/components/upload-image';
import FormItem from '@/components/form/item';
import Grid from '@/app/company/posts/course/components/flex/grid';
import Row from '@/app/company/posts/course/components/flex/row';
import useGetStoriesById from '@/api/success-stories/use-get-stories-by-id';
import Modal from '@/components/modal';
import useUpdateStories from '@/api/success-stories/use-edite-stories';
import { default as SuccessIcon } from '@/components/icons/success.svg';

export default () => {
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const routs = useRouter();
  const { id } = useParams();

  const convertToBase64 = async (file?: File) => (file ? await convertFileToBase64(file) : undefined);

  const { mutate: updateStoriesById } = useUpdateStories({
    onSuccess: () => {
      setIsOpenSuccessModal(true);
    },
  });

  const {
    data: { result },
    isLoading,
  } = useGetStoriesById(id);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const photoBase64 = await convertToBase64(data.photoItem?.[0]);
    updateStoriesById({
      id: id,
      storiesData: {
        successTitle: data.successTitle,
        story: data.story,
        photo: photoBase64,
      },
    });
  };

  const closeSuccessModal = () => {
    setIsOpenSuccessModal(false);
    routs.push('/admin/stories');
  };

  return (
    <>
      {!isLoading ? (
        <Form onSubmit={onSubmit} defaultValues={result}>
          <Grid>
            <Row>
              <FormItem label="Վերնագիր" name="successTitle">
                <Input name="successTitle" />
              </FormItem>
            </Row>
            <Row>
              <FormItem label="Պատմություն" name="story">
                <Textarea name="story" />
              </FormItem>
            </Row>
            <Row>
              <FormItem label="Կցել լուսանկարը" name="photo">
                <UploadImage defaultImage={result?.photo}/>
              </FormItem>
            </Row>
          </Grid>
          <SubmitButton />
        </Form>
      ) : (
        <div>...loading</div>
      )}
      <Modal isOpen={isOpenSuccessModal} onClose={closeSuccessModal} width={'40%'} footer={false}>
        <div className="flex items-center flex-col gap-11">
          <SuccessIcon />
          <p className="w-[80%] text-lg font-medium text-davy-gray flex text-center">
            Ձեր պատմությունը հաջողությամբ պահպանվել է
          </p>
        </div>
      </Modal>
    </>
  );
};
