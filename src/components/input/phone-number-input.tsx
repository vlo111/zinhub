import React from 'react';
import { ErrorOption, useFormContext } from 'react-hook-form';
import { Input } from '@/components/input';

const PhoneNumberInput: React.FC = () => {
  const { setValue, setError } = useFormContext();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // Remove all non-digit characters from the input
    const cleanedInput = input.replace(/\D/g, '');

    // Limit input to a maximum of 11 numbers
    input = cleanedInput.slice(0, 11);

    // Format the cleaned input
    const formattedPhoneNumber = formatPhoneNumber(input);

    setValue('phone', formattedPhoneNumber);

    if (formattedPhoneNumber.length !== 18) {
      setError('phone', {
        type: 'manual',
        message: 'Հեռախոսահամարի անվավեր ձևաչափ',
      } as ErrorOption);
    } else {
      setError('phone', '' as ErrorOption);
    }
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const formattedNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters

    // Add parentheses and hyphens based on the length of the input
    let formattedPhoneNumber = '';

    if (formattedNumber.length > 0) {
      formattedPhoneNumber += `+374 (${formattedNumber.slice(3, 5)}`;
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

  return <Input name="phone" onChange={handlePhoneNumberChange} />;
};

export default PhoneNumberInput;
