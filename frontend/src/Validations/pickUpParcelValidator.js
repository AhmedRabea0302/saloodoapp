// Validate From Fields
export const pickUpParcelValidator = (values) => {
  const errors = {};
  if (!values.pickedup_at) {
    errors.pickedup_at = "Required Pickup Date and Time";
  }
  if (!values.dropedoff_at) {
    errors.dropedoff_at = "Required Dropoff Date and Time";
  }
  return errors;
};

export default pickUpParcelValidator;
