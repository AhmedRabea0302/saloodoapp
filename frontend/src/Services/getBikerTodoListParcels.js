import axios from "axios";
import authToken from "./AuthToken";

const BASE_URL = "http://localhost:8000/api/v1";
const token = authToken();
const fetchToDoListParcels = async (biker_id) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/biker/biker-todolist/${biker_id}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "X-Auth-Token": `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchToDoListParcels;
