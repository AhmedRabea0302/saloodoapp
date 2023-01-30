import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import authServices from "../Services/Auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = authServices.getUser();
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img className="logo" alt="Saloodo" src={logo}></img>
        </Link>
        {user ? (
          <ul className="nav-links">
            {user.user_type == 0 ? (
              <>
                <li>
                  <Link to="/">My Parcels</Link>
                </li>
                <li>
                  <Link to="/create-parcel">Create Parcel</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/biker">My ToDo</Link>
                </li>
                <li>
                  <Link to="/all-parcels">All Parcels</Link>
                </li>
              </>
            )}
            <li>
              <button
                className="btn btn-primary"
                onClick={() => {
                  authServices.logout().then(
                    () => {
                      navigate("/login");
                      window.location.reload();
                    },
                    (error) => {
                      console.log(error);
                    }
                  );
                }}
              >
                Log Out
              </button>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
