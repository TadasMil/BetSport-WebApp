export const requiredValidation = {
  required: {
    value: "true",
    message: "Netinkamas elektroninis paštas",
  },
};

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

export const nameValidation = {
  required: {
    value: "true",
    message: "Vardas laukas negali būti tuščias",
  },
};

export const lastNameValidation = {
  required: {
    value: "true",
    message: "Pavardė laukas negali būti tuščias",
  },
};
