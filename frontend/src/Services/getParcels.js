import axios from "axios";
import authToken from "./AuthToken";
import authServices from "./Auth";

const BASE_URL = "http://localhost:8000/api/v1";
const user = authServices.getUser();
const token = authToken();

const fetchParcels = async (type) => {
  try {
    const URI =
      type == "userparcels" ? "parcel/user-all-parcels" : "parcel/all-parcels";
    const { data } = await axios.get(`${BASE_URL}/${URI}/${user.user_id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "X-Auth-Token": `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchParcels;
