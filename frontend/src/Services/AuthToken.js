const authToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    return user.token;
  } else {
    return "";
  }
};

export default authToken;
