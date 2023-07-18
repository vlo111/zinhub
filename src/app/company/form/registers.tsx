export const registerAddress = {
  required: 'Գտնվելու վայրը պարտադիր է',
  minLength: {
    value: 3,
    message: 'Գտնվելու վայրը պետք է ունենա առնվազն 3 նիշ',
  },
  maxLength: {
    value: 100,
    message: 'Գտնվելու վայրը պետք է ունենա առավելագույնը 100 նիշ',
  },
};

export const registerAbout = {
  minLength: {
    value: 3,
    message: 'Ընկերության մասին դաշտը պետք է ունենա առնվազն 1 նիշ',
  },
  maxLength: {
    value: 2048,
    message: 'Ընկերության մասին դաշտը պետք է ունենա առավելագույնը 2048 նիշ',
  },
};

export const registerValue = {
  minLength: {
    value: 3,
    message: 'Ընկերության արժեքներ դաշտը պետք է ունենա առնվազն 1 նիշ',
  },
  maxLength: {
    value: 2048,
    message: 'Ընկերության արժեքներ դաշտը պետք է ունենա առավելագույնը 2048 նիշ',
  },
};

export const registerCountOfWorkers = {
  pattern: {
    value: /^[1-9]\d{0,3}$/,
    message: 'Աշխատակիցների քանակը պետք է ունենա առավելագույնը 4 նիշ',
  },
};

export const registerTypeField = {
  required: 'Ընկերության տեսակը պարտադիր է',
  minLength: {
    value: 1,
    message: 'Ընկերության տեսակը պետք է ունենա առնվազն 1 նիշ',
  },
  maxLength: {
    value: 120,
    message: 'Ընկերության տեսակը պետք է ունենա առավելագույնը 120 նիշ',
  },
};

export const registerCreatedField = {
  required: 'Ընկերության տեսակը պարտադիր է',
};
