import { Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import authToken from "../Services/AuthToken";

export { PrivateRoute };

function PrivateRoute({ component: Component, ...rest }) {
  const token = useRecoilValue(authToken());
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token) {
          // not logged in so Navigate to login page with the return url
          return (
            <Route
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        // authorized so return component
        return <Component {...props} />;
      }}
    />
  );
}
