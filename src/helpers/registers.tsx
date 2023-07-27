import { Registers } from '@/types/registers';

export const registers: Registers = {
  email: {
    required: 'էլ․ հասցեն պարտադիր է',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Անվավեր էլ․ հասցե',
    },
  },
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
  description: {
    minLength: {
      value: 1,
      message: 'Ընկերության մասին դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 2048,
      message: 'Ընկերության մասին դաշտը պետք է ունենա առավելագույնը 2048 նիշ',
    },
  },
  companyValues: {
    minLength: {
      value: 1,
      message: 'Ընկերության արժեքներ դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 2048,
      message: 'Ընկերության արժեքներ դաշտը պետք է ունենա առավելագույնը 2048 նիշ',
    },
  },
  numberOfEmployees: {
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
  taxAccount: {
    required: 'ՀՎՀՀ դաշտը պարտադիր է',
    pattern: {
      value: /^\d{8}$/,
      message: 'ՀՎՀՀ դաշտը պետք է լինի 8 թիվ',
    },
  },
  companyName: {
    required: 'Կազմակերպության անվանումը պարտադիր է',
    minLength: {
      value: 2,
      message: 'Կազմակերպության անվանումը պետք է ունենա առնվազն 2 նիշ',
    },
    maxLength: {
      value: 50,
      message: 'Կազմակերպության անվանումը պետք է ունենա առավելագույնը 50 նիշ',
    },
  },
  password: {
    required: 'Գաղտնաբառը պարտադիր է',
    minLength: {
      value: 8,
      message: 'Գաղտնաբառը պետք է լինի առնվազն 8 նիշ',
    },
    maxLength: {
      value: 60,
      message: 'Գաղտնաբառը չպետք է գերազանցի 60 նիշը',
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{8,}$/,
      message: 'Գաղտնաբառը պետք է պարունակի առնվազն մեկ տառ, մեկ թիվ և չի կարող պարունակել բացատներ',
    },
  },
};
