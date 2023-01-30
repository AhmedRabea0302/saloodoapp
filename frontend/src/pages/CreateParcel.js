import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validateFormFields } from "../Validations/createParcelValidator";
import authToken from "../Services/AuthToken";

const CreateParcel = () => {
  const token = authToken();
  const BASE_URL = "http://localhost:8000/api/v1";
  const initialValues = {
    parcel_name: "",
    pickup_address: "",
    dropoff_address: "",
  };
  const [formFields, setFormFields] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitt, setIsSubmitt] = useState(false);
  const navigate = useNavigate();

  // Handle Form Fields Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length !== 0) {
      setIsSubmitt(false);
    }
  }, [formErrors]);
  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateFormFields(formFields));
    setIsSubmitt(true);
    if (isSubmitt) {
      try {
        fetch(`${BASE_URL}/parcel/createparcel`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": `Bearer ${token}`,
          },
          body: JSON.stringify(formFields),
        })
          .then(() => {
            navigate("/");
          })
          .catch();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <section className="section create">
      <h2 className="section-title">Ceate New Parcel</h2>
      <form method="POST" onSubmit={handleSubmit} className="create-form ">
        <div className="form-control">
          <label htmlFor="name">Parcel Name</label>
          <input
            type="text"
            id="name"
            className="create-form"
            name="parcel_name"
            value={formFields.parcel_name}
            onChange={handleChange}
          />
          <small>{formErrors.parcel_name}</small>
        </div>
        <div className="form-control">
          <label htmlFor="pickup_address">Pickup Address</label>
          <input
            type="text"
            id="pickaddress"
            className="create-form"
            name="pickup_address"
            value={formFields.pickup_address}
            onChange={handleChange}
          />
          <small>{formErrors.pickup_address}</small>
        </div>

        <div className="form-control">
          <label htmlFor="dropoff_address">Dropoff Address</label>
          <input
            type="text"
            id="dropaddress"
            className="create-form"
            name="dropoff_address"
            value={formFields.dropoff_address}
            onChange={handleChange}
          />
          <small>{formErrors.dropoff_address}</small>
        </div>

        <div className="form-control">
          <button className="btn btn-primary" type="submit">
            Create Parcel
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateParcel;
