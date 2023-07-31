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
    maxLength: {
      value: 2048,
      message: 'Ընկերության մասին դաշտը պետք է ունենա առավելագույնը 2048 նիշ',
    },
  },
  companyValues: {
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
  website: {
    pattern: {
      value: /^(?:(?:https?|ftp):\/\/)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?:\/[^\s]*)?$/,
      message: 'Անվավեր կայքի հասցե ',
    },
  },
  duration: {
    required: 'Տևողությունը պարտադիր է',
    minLength: {
      value: 2,
      message: 'Տևողությունը պետք է ունենա առնվազն 2 նիշ',
    },
    maxLength: {
      value: 20,
      message: 'Տևողությունը պետք է ունենա առավելագույնը 20 նիշ',
    },
  },
  location: {
    required: 'Հասցեն պարտադիր է',
    minLength: {
      value: 9,
      message: 'Հասցեն պետք է ունենա առնվազն 9 նիշ',
    },
    maxLength: {
      value: 100,
      message: 'Հասցեն պետք է ունենա առավելագույնը 100 նիշ',
    },
  },
  salary: {
    required: 'Աշխատավարձի դաշտը պարտադիր է',
    minLength: {
      value: 2,
      message: 'Աշխատավարձի դաշտը պետք է ունենա առնվազն 2 նիշ',
    },
    maxLength: {
      value: 20,
      message: 'Աշխատավարձի դաշտը պետք է ունենա առավելագույնը 10 նիշ',
    },
  },
  workDescription: {
    required: 'Աշխատանքի նկարագրություն դաշտը պարտադիր է',
    minLength: {
      value: 1,
      message: 'Աշխատանքի նկարագրություն դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 500,
      message: 'Աշխատանքի նկարագրություն դաշտը պետք է ունենա առավելագույնը 500 նիշ',
    },
  },
  additionalNotes: {
    required: 'Հավելյալ նշումներ դաշտը պարտադիր է',
    minLength: {
      value: 1,
      message: 'Հավելյալ նշումներ դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 500,
      message: 'Հավելյալ նշումներ դաշտը պետք է ունենա առավելագույնը 500 նիշ',
    },
  },
  whatWeOffer: {
    required: 'Ինչ ենք մենք առաջարկում նշումներ դաշտը պարտադիր է',
    minLength: {
      value: 1,
      message: 'Ինչ ենք մենք առաջարկում դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 500,
      message: 'Ինչ ենք մենք առաջարկում դաշտը պետք է ունենա առավելագույնը 500 նիշ',
    },
  },
  courseName: {
    required: 'Հայտարարության վերնագիրը պարտադիր է',
    minLength: {
      value: 2,
      message: 'Հայտարարության վերնագիրը պետք է ունենա առնվազն 2 նիշ',
    },
    maxLength: {
      value: 50,
      message: 'Հայտարարության վերնագիրը պետք է ունենա առավելագույնը 50 նիշ',
    },
  },
  courseDescription: {
    required: 'ԸԴասընթացի մասին դաշտը դաշտը պարտադիր է',
    minLength: {
      value: 1,
      message: 'Դասընթացի մասին դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 500,
      message: 'Դասընթացի մասին դաշտը դաշտը պետք է ունենա առավելագույնը 500 նիշ',
    },
  },
  classHours: {
    required: 'Դասաժամերի մասին դաշտը դաշտը պարտադիր է',
    minLength: {
      value: 1,
      message: 'Դասաժամերի մասին դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 20,
      message: 'Դասաժամերի մասին դաշտը դաշտը պետք է ունենա առավելագույնը 20 նիշ',
    },
  },
  program: {
    required: 'Ծրագիր դաշտը դաշտը պարտադիր է',
    minLength: {
      value: 1,
      message: 'Ծրագիր դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 1024,
      message: 'Ծրագիր դաշտը դաշտը պետք է ունենա առավելագույնը 1024 նիշ',
    },
  },
  dynamicInput: {
    required: 'Ի՞նչ եք սովորելու դաշտը դաշտը պարտադիր է',
    minLength: {
      value: 1,
      message: 'Ի՞նչ եք սովորելու դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 50,
      message: 'Ի՞նչ եք սովորելու դաշտը դաշտը պետք է ունենա առավելագույնը 50 նիշ',
    },
  },
  filedStudyId: {
    required: 'Ոլորտ դաշտը պարտադիր է',
  },
  levelId: {
    required: 'Դասընթացի Մակարդակ դաշտը պարտադիր է',
  },
  languageId: {
    required: 'Դասընթացի անցկացման Լեզու դաշտը պարտադիր է',
  },
  formatId: {
    required: 'Ձևաչափ դաշտը պարտադիր է',
  },
  regionId: {
    required: 'Մարզ դաշտը պարտադիր է',
  },
  startDate: {
    required: 'Դաշտը պարտադիր է',
  },
  applicationDeadline: {
    required: 'Դաշտը պարտադիր է',
  },
  filedWorkId: {
    required: 'Ոլորտ դաշտը պարտադիր է',
  },
  employmentId: {
    required: 'Զբաղվածություն դաշտը պարտադիր է',
  },
  responsibilities: {
    required: 'Պարտականություններ դաշտը պարտադիր է',
    minLength: {
      value: 1,
      message: 'Պարտականություններ դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 1024,
      message: 'Պարտականություններ դաշտը դաշտը պետք է ունենա առավելագույնը 1024 նիշ',
    },
  },
  skills: {
    required: 'Անհրաժեշտ հմտություններ դաշտը պարտադիր է',
    minLength: {
      value: 1,
      message: 'Անհրաժեշտ հմտություններ դաշտը պետք է ունենա առնվազն 1 նիշ',
    },
    maxLength: {
      value: 1024,
      message: 'Անհրաժեշտ հմտություններ դաշտը դաշտը պետք է ունենա առավելագույնը 1024 նիշ',
    },
  },
};
