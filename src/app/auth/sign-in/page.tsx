'use client';
import { useSignIn } from '@/api/auth/use-sign-in';
import { Button, Form } from 'antd';
import { FormItem } from '@/components/form/form-item';
import { Input, Password } from '@/components/input';
import { emailMessage, passwordMinMessage, requiredMessage } from '@/app/auth/utils';
import Link from 'next/link';

export type SignInForm = {
  email: string;
  password: string;
};

export default function Home() {
  const { mutate } = useSignIn();

  const login = (values: SignInForm) => {
    mutate({ ...values });
  };

  return (
    <Form className="flex flex-col gap-3" layout="vertical" onFinish={login} requiredMark={false}>
      <FormItem name="email" label="Email" rules={emailMessage}>
        <Input />
      </FormItem>
      <FormItem name="password" label="Գաղտնաբառ" rules={[{ ...requiredMessage, ...passwordMinMessage }]}>
        <Password />
      </FormItem>
      <Link href="/forgot-password" className="">
        Մոռացե՞լ եք գաղտնաբառը
      </Link>
      <Button className="btn btn--primary" htmlType="submit">
        Մուտք գործել
      </Button>
    </Form>
  );
}
