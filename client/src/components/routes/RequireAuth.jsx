import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../context";

const RequireAuth = ({ children }) => {
  const [state, setState] = useContext(UserContext);
  const location = useLocation();

  return state === true ? children : <Navigate to="/login" replace state={{ path: location.pathname }} />;
};

export default RequireAuth;
