export const passwordValidation = {
  required: {
    value: "true",
    message: "Slaptažodis negali būti tuščias",
  },
  minLength: {
    value: 6,
    message: "Slaptažodis turi būti sudarytas bent iš 6 simbolių ar skaitmenų",
  },
};

export const requiredValidationCheck = (name: string) => {
  return {
    required: {
      value: "true",
      message: `${name} negali būti tuščias`,
    },
  };
};
