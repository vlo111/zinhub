import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import FormItems from './form-items';
import { useAuth } from '@/context/auth';

type FormData = {
  email: string;
  password: string;
};

export default () => {
  const { login } = useAuth();

  const onSubmit: SubmitHandler<FormData> = async (data) => await login(data);

  return (
    <Form<FormData> onSubmit={onSubmit}>
      <FormItems />
    </Form>
  );
};
