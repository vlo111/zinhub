'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormItem from '@/components/form-item';
import Input from '@/components/input';

type FormItems = {
  name: string;
  email: string;
  password: string;
};

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormItems>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('Data - ', data);
  };

  0;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem label="Password" error={errors.password?.message}>
        <Input
          register={register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
            maxLength: {
              value: 60,
              message: 'Password must not exceed 60 characters',
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{8,}$/,
              message: 'Password must contain at least one letter, one number, and cannot contain spaces',
            },
          })}
          type="password"
          id="password"
        />
      </FormItem>
      <FormItem label="Email" error={errors.email?.message}>
        <Input
          register={register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
      </FormItem>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Home;
