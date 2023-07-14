export const registerAdditionalField = {
  required: 'Կազմակերպության անվանումը պարտադիր է',
  minLength: {
    value: 2,
    message: 'Կազմակերպության անվանումը պետք է ունենա առնվազն 2 նիշ',
  },
  maxLength: {
    value: 50,
    message: 'Կազմակերպության անվանումը պետք է ունենա առավելագույնը 50 նիշ',
  },
};
