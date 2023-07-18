// 'use client';
// import { useState } from 'react';
// import Modal from '@/components/modal';
// import GradientLine from '../gradientLines';
// import Contacts from './components/Contacts';
// import Information from './components/Information';
// import { SubmitButton } from './components/SubmitButton';
// import Teacher from './components/Teacher';
// import CourseDetails from './components/courseDetails';
// import { FormProvider, useForm } from 'react-hook-form';
// import { FormItems } from './form';
// import Grid from './components/flex/grid';
// import Row from './components/flex/row';
// import FormItem from '@/components/form/item';
// import { Input } from '@/components/input';
// import { ZSelect } from '@/components/select';
// import { Textarea } from '@/components/texarea';
// import FormItem from '@/components/form/item';
// import { Input } from '@/components/input';

export default () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const methods = useForm();

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };
//   const onSubmit = async (data) => {
//     console.log('Data - ', data);
//   };

//   const options = [
//     { value: 'volvo', label: 'Volvo' },
//     { value: 'saab', label: 'Saab' },
//     { value: 'Saab', label: 'Mercedes' },
//     { value: 'audi', label: 'Audi' },
//   ];

  return (<>get all</>
    //   <form onSubmit={methods.handleSubmit(onSubmit)}>
    //     <GradientLine />
    //     <Grid>
    //       <Row>
    //         {/* <FormItem label="Դասընթացի Անվանումը" error={errors.courseName?.message}>
    //           <Input register={register('courseName')} errors={errors} />
    //         </FormItem> */}
    //       </Row>
    //       <Row>
    //         <FormItem label="courseSector" >
    //           <ZSelect name="courseSector" label="Ոլորտ" options={options} />
    //         </FormItem>
    //       </Row>
    //       <Row>
    //         {/* <FormItem label="aboutCourse" error={errors.courseName?.message}> */}
    //         <Textarea name="aboutCourse" label="Դասընթացի մասին" />
    //         {/* </FormItem> */}
    //       </Row>
    //     </Grid>
    //     <Contacts />
    //     <GradientLine />
    //     <Information />
    //     <GradientLine />
    //     <Teacher />
    //     <Modal isOpen={isOpen} onClose={closeModal}>
    //       <CourseDetails />
    //     </Modal>
    //     <SubmitButton openModal={openModal} />
    //   </form>
  );
};
