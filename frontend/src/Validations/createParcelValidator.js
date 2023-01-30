// Validate From Fields
export const validateFormFields = (values) => {
  const errors = {};

  if (values.parcel_name.length < 5) {
    errors.parcel_name = "Parcel Name Must be At Least 5 characters long";
  }

  if (values.pickup_address.length < 10) {
    errors.pickup_address = "Pickup Addres Must be At Least 5 characters long";
  }

  if (values.dropoff_address.length < 10) {
    errors.dropoff_address =
      "Drop Off Address Must be At Least 5 characters long";
  }
  if (!values.parcel_name) {
    errors.parcel_name = "Parcel Name is required";
  }
  if (!values.pickup_address) {
    errors.pickup_address = "Pickup Address is required";
  }
  if (!values.dropoff_address) {
    errors.dropoff_address = "Drop Off Address is required";
  }
  return errors;
};
