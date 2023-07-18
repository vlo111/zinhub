// export const registerEmailField = {
//   required: 'էլ․ հասցեն պարտադիր է',
//   pattern: {
//     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//     message: 'Անվավեր էլ․ հասցե',
//   },
// };

// registers.tsx
type Register = {
  required?: string;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
};

export type Registers = {
  [key: string]: Register;
};

export const registers: Registers = {
  address: {
    required: 'Գտնվելու վայրը պարտադիր է',
    minLength: {
      value: 3,
      message: 'Գտնվելու վայրը պետք է ունենա առնվազն 3 նիշ',
    },
    maxLength: {
      value: 100,
      message: 'Գտնվելու վայրը պետք է ունենա առավելագույնը 100 նիշ',
    },
  },
  about: {
    minLength: {
      value: 3,
      message: 'Ընկերության մասին դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 2048,
      message: 'Ընկերության մասին դաշտը պետք է ունենա առավելագույնը 2048 նիշ',
    },
  },
  value: {
    minLength: {
      value: 3,
      message: 'Ընկերության արժեքներ դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 2048,
      message: 'Ընկերության արժեքներ դաշտը պետք է ունենա առավելագույնը 2048 նիշ',
    },
  },
  countOfWorkers: {
    pattern: {
      value: /^[1-9]\d{0,3}$/,
      message: 'Աշխատակիցների քանակը պետք է ունենա առավելագույնը 4 նիշ',
    },
  },
  type: {
    required: 'Ընկերության տեսակը պարտադիր է',
    minLength: {
      value: 1,
      message: 'Ընկերության տեսակը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 120,
      message: 'Ընկերության տեսակը պետք է ունենա առավելագույնը 120 նիշ',
    },
  },
  created: {
    required: 'Ընկերության տեսակը պարտադիր է',
  },
};
