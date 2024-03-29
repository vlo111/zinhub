import React, { ChangeEventHandler, useState } from 'react';
import { Input } from '@/components/input/index';
import { Form } from 'antd';

const PhoneNumberInput = () => {
  const form = Form.useFormInstance();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    let input = e.target.value;

    // Remove all non-digit characters from the input
    const cleanedInput = input.replace(/\D/g, '');

    // Limit input to a maximum of 11 numbers
    input = cleanedInput.slice(0, 11);

    // Format the cleaned input
    const formattedPhoneNumber = formatPhoneNumber(input);

    // Update the state
    setPhoneNumber(formattedPhoneNumber);

    form.setFieldsValue({ phone: formattedPhoneNumber });
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const formattedNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters

    // Add parentheses and hyphens based on the length of the input
    let formattedPhoneNumber = '';

    if (formattedNumber.length > 0) {
      formattedPhoneNumber += `+${formattedNumber.slice(0, 3)}`;
    }

    if (formattedNumber.length > 3) {
      formattedPhoneNumber += ` (${formattedNumber.slice(3, 5)}`;
    }

    if (formattedNumber.length > 5) {
      formattedPhoneNumber += `) ${formattedNumber.slice(5, 7)}`;
    }

    if (formattedNumber.length > 7) {
      formattedPhoneNumber += `-${formattedNumber.slice(7, 9)}`;
    }

    if (formattedNumber.length > 9) {
      formattedPhoneNumber += `-${formattedNumber.slice(9)}`;
    }

    return formattedPhoneNumber;
  };

  return <Input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="+374 (XX) XX-XX-XX" />;
};

export default PhoneNumberInput;
