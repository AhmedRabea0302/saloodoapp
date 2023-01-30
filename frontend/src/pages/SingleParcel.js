import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchSingleParcel from "../Services/getSingleParcel";
import updateParcel from "../Services/updateParcel";
import validateFormFields from "../Validations/pickUpParcelValidator";
const SingleParcel = () => {
  const { id } = useParams();
  const initialValues = {
    pickedup_at: new Date(),
    dropedoff_at: new Date(),
  };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitt, setIsSubmitt] = useState(false);

  const [parcel, setParcel] = useState({});
  const [pickedup_at, setPickedup_at] = useState(false);
  const [dropedoff_at, setDropedoff_at] = useState(false);
  const [dates, setDates] = useState(initialValues);
  const [updated, setUpdated] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "pickedup_at") setPickedup_at(true);
    if (name == "dropedoff_at") setDropedoff_at(true);
    setDates({ ...dates, [name]: value });
  };
  useEffect(() => {
    if (Object.keys(formErrors).length !== 0) {
      setIsSubmitt(false);
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateFormFields(dates));
    setIsSubmitt(true);
    if (isSubmitt) {
      try {
        updateParcel(id, dates).then((response) => {
          response.result == 1 ? setUpdated(true) : setUpdated(false);
        });
      } catch (error) {}
    } else {
      console.log(formErrors);
    }
  };
  useEffect(() => {
    fetchSingleParcel(id)
      .then((response) => {
        setParcel(response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  return (
    <section className="section text-center parcel-details">
      {updated && <small>Added To Your To do list</small>}
      <h1 className="section-title">{parcel.parcel_name}</h1>
      <div>
        <h4>Pickup Address:</h4>
        <p>{parcel.pickup_address}</p>
      </div>
      <div>
        <h4>Dropoff Address:</h4>
        <p>{parcel.dropoff_address}</p>
      </div>
      <div>
        <h4>Owner Information:</h4>
        <p>Name: {parcel.name}</p>
        <p>Email: {parcel.email}</p>
        <p>Phone Number: {parcel.phone_number}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="pickupda_at">Pickup Time</label>

          <input
            type="datetime-local"
            name="pickedup_at"
            value={dates.pickedup_at}
            onChange={handleChange}
          ></input>
          <small>{formErrors.pickedup_at}</small>
        </div>

        <div className="form-control">
          <label htmlFor="dropedoff_atdate">Dropoff Time</label>
          <input
            min={new Date()}
            type="datetime-local"
            name="dropedoff_at"
            value={dates.dropedoff_at}
            onChange={handleChange}
          ></input>
          <small>{formErrors.dropedoff_at}</small>
        </div>
        <div className="form-control">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!pickedup_at || !dropedoff_at}
          >
            Pick Up Parcel
          </button>
        </div>
      </form>
    </section>
  );
};

export default SingleParcel;
