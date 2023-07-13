export const registerNameField = {
  required: 'Name is required',
  minLength: {
    value: 2,
    message: 'Name must have a minimum of 2 characters',
  },
  maxLength: {
    value: 50,
    message: 'Name must have a maximum of 50 characters',
  },
};

export const registerEmailField = {
  required: 'Email is required',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address',
  },
};

export const registerPasswordField = {
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
};

export const registerCustomField = {
  required: 'Custom Field is required',
  pattern: {
    value: /^\d{8}$/,
    message: 'Custom Field must be 8 numbers',
  },
};

export const registerAdditionalField = {
  required: 'Additional Field is required',
  minLength: {
    value: 2,
    message: 'Additional Field must have a minimum of 2 characters',
  },
  maxLength: {
    value: 50,
    message: 'Additional Field must have a maximum of 50 characters',
  },
};
