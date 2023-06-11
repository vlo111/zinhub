import { Rule } from 'antd/es/form';

export const requiredMessage = { required: true, message: 'The field is required' };

export const minMessage = (min: number) => ({ min, message: `The minimum length for this field is ${min} characters` });
export const maxMessage = (max: number) => ({ max, message: `The maximum length for this field is ${max} characters` });

export const phoneRegExp = /^\d{11}$/;
export const phoneErrorMessage = 'Invalid phone number';

export const rulesInput = [{ ...requiredMessage }, { ...minMessage(3) }, { ...maxMessage(30) }];

export const passwordMinMessage = [{ ...requiredMessage }, { ...minMessage(6) }];

export const emailMessage = [{ ...requiredMessage }, { type: 'email', message: 'Email is not valid' }];

export const hvhhMessage = [{ ...requiredMessage }, { min: 8, max: 8, message: 'The field most be 8 number' }];

const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/;

export const rulesPassword = [
  { ...requiredMessage },
  { ...minMessage(9) },
  { ...maxMessage(16) },
  {
    pattern: passwordRegExp,
    message: 'Password must contain at least one uppercase character, one lowercase character and one digit ',
  },
  ({ getFieldValue }: { getFieldValue: (name: string) => string }) => ({
    async validator(_: { field: string }, value: string) {
      if (
        _.field === 'old_password' ||
        getFieldValue(_.field === 'password' ? 'confirm_password' : 'password') === value
      ) {
        return await Promise.resolve();
      }
      throw new Error('The two passwords that you entered do not match!');
    },
  }),
];

export const rulesPhone = [
  {
    validator: async (_: Rule, value: string) => {
      if (/^\d{11}$/.test(value.replace(/\D/g, ''))) {
        return Promise.resolve();
      } else {
        return Promise.reject('Invalid phone number');
      }
    },
  },
];
