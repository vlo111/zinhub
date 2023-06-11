'use client';
import { Button, Col, Form, Row } from 'antd';
import { FormItem } from '@/components/form/form-item';
import { emailMessage, hvhhMessage, rulesInput, rulesPassword, rulesPhone } from '@/app/auth/utils';
import { Input, Password } from '@/components/input';
import PhoneNumberInput from '@/components/input/phone-number-input';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} className="flex flex-col gap-3" layout="vertical" autoComplete="off" requiredMark={false}>
      <FormItem name="name" label="Կազմակերպության անվանում" rules={rulesInput}>
        <Input />
      </FormItem>
      <FormItem name="hvhh" label="ՀՎՀՀ" rules={hvhhMessage}>
        <Input />
      </FormItem>
      <FormItem name="email" label="Email" rules={emailMessage}>
        <Input />
      </FormItem>
      <FormItem rules={rulesPhone} name="phone" label="Հեռախոսահամար">
        <PhoneNumberInput />
      </FormItem>
      <FormItem name="password" label="Գաղտնաբառ" rules={rulesPassword}>
        <Password />
      </FormItem>
      <FormItem name="confirm_password" label="Կրկնել գաղտնաբառը" rules={rulesPassword}>
        <Password />
      </FormItem>
      <Row className="flex justify-end gap-10">
        <Col>
          <Button className="btn btn--secondary" htmlType="submit">
            Չեղարկել
          </Button>
        </Col>
        <Col>
          <Button className="btn btn--primary" htmlType="submit">
            Գրանցվել
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
