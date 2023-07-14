export const registerEmailField = {
  required: 'էլ․ հասցեն պարտադիր է',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Անվավեր էլ․ հասցե',
  },
};
