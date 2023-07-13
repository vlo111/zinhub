import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/input';

const PhoneNumberInput: React.FC = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // Remove all non-digit characters from the input
    const cleanedInput = input.replace(/\D/g, '');

    // Limit input to a maximum of 11 numbers
    input = cleanedInput.slice(0, 11);

    // Format the cleaned input
    const formattedPhoneNumber = formatPhoneNumber(input);

    // Update the form value using setValue
    // register('phone').onChange({ target: { value: formattedPhoneNumber } });
    setValue('phone', formattedPhoneNumber);
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

  return (
    <Input
      onChange={handlePhoneNumberChange}
      register={register('phone', {
        required: 'Phone number is required',
        pattern: {
          value: /^[+]\d{3} [(]\d{2}[)] \d{2}-\d{2}-\d{2}$/,
          message: 'Invalid phone number format',
        },
      })}
      errors={errors}
    />
  );
};

export default PhoneNumberInput;
