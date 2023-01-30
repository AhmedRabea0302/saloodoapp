import authToken from "./AuthToken";
const BASE_URL = "http://localhost:8000/api/v1";
const token = authToken();

const pickupParcel = async (id, data) => {
  const parcel_id = id;
  const body = data;
  try {
    const data = await fetch(`${BASE_URL}/biker/updateparcel/${parcel_id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return data;
  } catch (error) {
    return error;
  }
};

export default pickupParcel;
