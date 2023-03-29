// regex for email

export const isValidEmail = (value) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
};

//regex for password

export const isValidPassword = (value) => {
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return passRegex.test(value);
};

export const isValidNumber = (value) => {
  const numberRegex = /@"^\d$"/;
  return numberRegex.test(value);
};

// logic to check if the fields are not empty.

export const isValidObjField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

// updates the error, takes two params the error string and the state setter.
export const updateError = (error, stateUpdater) => {
  console.log(error);
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 5000);
};
