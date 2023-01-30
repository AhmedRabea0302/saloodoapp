import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import authServices from "../Services/Auth";
import validateFormFields from "../Validations/registerValidator";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    phone_number: "",
    password: "",
    user_type: 0,
  };
  const [formFields, setFormFields] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitt, setIsSubmitt] = useState(false);
  const [message, setMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length !== 0) {
      setIsSubmitt(false);
    }
  }, [formErrors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validateFormFields(formFields));
    setIsSubmitt(true);
    if (isSubmitt) {
      try {
        await authServices.Register(formFields).then(
          (response) => {
            setMessage(response.message);
            if (response.status == 1) {
              // email not taken
              setFormFields(initialValues);
            }
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="section">
      <h1 className="section-title">Register</h1>
      <form method="POST" onSubmit={handleSubmit} className="create-form">
        <p className="error-message">{message}</p>
        <div className="form-control">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="text"
            id="phone_number"
            className="create-form"
            name="phone_number"
            value={formFields.phone_number}
            onChange={handleChange}
          />
          <small>{formErrors.phone_number}</small>
        </div>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="create-form"
            name="name"
            value={formFields.name}
            onChange={handleChange}
          />
          <small>{formErrors.name}</small>
        </div>
        <div className="form-control">
          <label htmlFor="email">emaill</label>
          <input
            type="text"
            id="email"
            className="create-form"
            name="email"
            value={formFields.email}
            onChange={handleChange}
          />
          <small>{formErrors.email}</small>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            className="create-form"
            name="password"
            value={formFields.password}
            onChange={handleChange}
          />
          <small>{formErrors.password}</small>
        </div>
        <div className="form-control">
          <label htmlFor="user_type">Register As:</label>
          <select
            className="my-select-menu"
            onChange={handleChange}
            id="user_type"
            name="user_type"
            value={formFields.user_type}
          >
            <option value="0">User</option>
            <option value="1">Biker</option>
          </select>
        </div>

        <div className="form-control text-center">
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </div>
        <p className="register-label">
          Already Have Account,
          <Link to="/Login">
            <label>Login Here</label>
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
