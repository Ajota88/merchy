import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "../index";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
  }
  return children;
};

export default PrivateRoute;
