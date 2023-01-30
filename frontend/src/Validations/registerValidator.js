// Validate From Fields
export const validateFormFields = (values) => {
  const errors = {};
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (values.name.length < 3) {
    errors.name = "Name Must be at least 3 characters";
  }
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email.match(mailformat)) {
    errors.email = "Invalid Email Address";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.phone_number) {
    errors.phone_number = "Phone Number is required";
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
