// Validate From Fields
export const validateFormFields = (values) => {
  const errors = {};
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!values.email.match(mailformat)) {
    errors.email = "Invalid Email Address";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }

  if (values.password.length < 6) {
    errors.password = "Password Must be at least 6 characters long";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export default validateFormFields;
