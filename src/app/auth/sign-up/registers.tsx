export const registerPasswordField = {
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
};

export const registerCustomField = {
  required: 'ՀՎՀՀ դաշտը պարտադիր է',
  pattern: {
    value: /^\d{8}$/,
    message: 'ՀՎՀՀ դաշտը պետք է լինի 8 թիվ',
  },
};

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
