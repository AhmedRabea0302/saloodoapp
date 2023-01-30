import { Link } from "react-router-dom";
const Parcel = (props) => {
  const {
    id,
    parcel_name,
    dropoff_address,
    pickup_address,
    status,
    pickedup_at,
    dropedoff_at,
    user_type,
  } = props;

  return (
    <article className="parcel">
      <div className="parcel-header">
        <h3>{parcel_name}</h3>
        {user_type === 0 && (
          <span
            className={`badge ${status === 0 ? "pending" : ""} ${
              status === 1 ? "pickedup " : ""
            } ${status === 2 ? "delivered" : ""}`}
          >
            {status === 0 ? "Pending" : ""}
            {status === 1 ? "Pickedup" : ""}
            {status === 2 ? "Deliverd" : ""}
          </span>
        )}
      </div>
      <div className="parcel-body">
        <p>Pickup Address: {pickup_address}</p>
        <p>Dropoff Address: {dropoff_address}</p>
      </div>

      {status !== 0 ? (
        <div className="parcel-footer">
          <p>Pickup At: {pickedup_at}</p>
          <p>Dropoff At: {dropedoff_at}</p>
        </div>
      ) : (
        ""
      )}
      {user_type == 1 && (
        <Link to={`/single-parcel/${id}`}>
          <button className="btn btn-primary">Pickup</button>
        </Link>
      )}
    </article>
  );
};

export default Parcel;
