const BASE_URL = "http://localhost:8000/api/v1";
const login = async (values) => {
  try {
    const loginData = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          const { message, ...rest } = data;
          localStorage.setItem("user", JSON.stringify(rest));
        }
        return data;
      });
    return loginData;
  } catch (error) {
    return error;
  }
};

const Register = async (values) => {
  try {
    const registerData = await fetch(`${BASE_URL}/user/register`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return registerData;
  } catch (error) {
    return error;
  }
};

const logout = async () => {
  localStorage.removeItem("user");
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authServices = { login, Register, logout, getUser };

export default authServices;
