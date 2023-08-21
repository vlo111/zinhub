'use client';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Form } from '@/components/form';
import { Input } from '@/components/input';
import { Textarea } from '@/components/texarea';
import { convertFileToBase64 } from '@/helpers/utils';
import { useRouter } from 'next/navigation';
import { UploadImage } from '@/app/company/teacher/components/upload-image';
import { SubmitButton } from './SubmitButton';
import FormItem from '@/components/form/item';
import Grid from '@/app/company/posts/course/components/flex/grid';
import Row from '@/app/company/posts/course/components/flex/row';
import useCreateStories from '@/api/success-stories/use-create-stories';
import Modal from '@/components/modal';
import { default as SuccessIcon } from '@/components/icons/success.svg';

export default () => {
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const { watch } = useForm();
  const routs = useRouter();
  const convertToBase64 = async (file?: File) => (file ? await convertFileToBase64(file) : undefined);
  const { mutate: createStoriesFn } = useCreateStories({
    onSuccess: () => {
      setIsOpenSuccessModal(true);
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const photoBase64 = await convertToBase64(data.photoItem?.[0]);
    createStoriesFn({
      successTitle: data.successTitle,
      story: data.story,
      photo: photoBase64,
    });
  };

  const closeSuccessModal = () => {
    setIsOpenSuccessModal(false);
    routs.push('/admin/stories');
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
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
              <UploadImage defaultImage={watch('photo')} />
            </FormItem>
          </Row>
        </Grid>
        <SubmitButton />
      </Form>
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
