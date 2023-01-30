import axios from "axios";
import authToken from "./AuthToken";
import authServices from "../Services/Auth";

const BASE_URL = "http://localhost:8000/api/v1";
const user = authServices.getUser();
const token = authToken();
const fetchSingleParcel = async (id) => {
  const parcel_id = id;
  try {
    const { data } = await axios.get(
      `${BASE_URL}/parcel/parcel-details/${parcel_id}`,
      {
        mode: "corse",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "X-Auth-Token": `Bearer ${token}`,
        },
        body: JSON.stringify({ user_id: user.user_id }),
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchSingleParcel;
