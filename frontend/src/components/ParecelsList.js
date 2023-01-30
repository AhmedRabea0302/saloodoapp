import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Parcel from "./Parcel";
import Loading from "./Loading";
import fetchParcels from "../Services/getParcels.js";
import authServices from "../Services/Auth";

const user_type = authServices.getUser()
  ? authServices.getUser().user_type
  : "";
const ParcelsList = (props) => {
  const [loading, setLoding] = useState(true);
  const [parcels, setParcels] = useState([]);
  const [filteredParcels, setFilteredParcels] = useState([]);

  const handleSelect = (e) => {
    const status = e.target.value;
    if (status == "") {
      setFilteredParcels(parcels);
    } else {
      const nParcels = parcels.filter((parcel) => parcel.status == status);
      setFilteredParcels(nParcels);
    }
  };

  useEffect(() => {
    fetchParcels(props.parcelstype)
      .then((response) => {
        setParcels(response);
        setFilteredParcels(response);
        setLoding(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (parcels.length == 0) {
    return (
      <div className="no-parcels">
        <h1 className="section-title">No Parcels Createed Yet!</h1>
        {user_type == 0 && (
          <Link to="/create-parcel">
            <button className="btn btn-primary">Create Parcel</button>
          </Link>
        )}
      </div>
    );
  }
  return (
    <div>
      <div className="section-title">
        <h2>parcels</h2>
        {user_type == 0 && (
          <select className="my-select-menu" onChange={handleSelect}>
            <option value="">All Parcels</option>
            <option value="0">Pending</option>
            <option value="1">Pickedup</option>
            <option value="2">Delivered</option>
          </select>
        )}
      </div>
      <div className="parcels-center">
        {filteredParcels.map((parcel) => {
          return <Parcel key={parcel.id} {...parcel} user_type={user_type} />;
        })}
      </div>
    </div>
  );
};

export default ParcelsList;
