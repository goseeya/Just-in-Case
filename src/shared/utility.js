export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;

  // additional but not necessary
  if (!rules) { 
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid; //remove white space
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.minLength && isValid;
  }

  if (rules.isEmail) {
     const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
     isValid = pattern.test(value) && isValid
   }

   if (rules.isNumeric) {
     const pattern = /^\d+$/;
     isValid = pattern.test(value) && isValid
   }

  // TODO change it so that it wont check one after another

  return isValid;
}
