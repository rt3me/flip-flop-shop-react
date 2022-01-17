import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../context";

const RequireAuth = ({ children, ...rest }) => {
  const [state, setState] = useContext(UserContext);
  const location = useLocation();

  console.log("RequireAuth state:", state);
  console.log("RequireAuth location.pathname:", location.pathname);
  console.log("RequireAuth ...rest:", { ...rest });

  return state === true ? children : <Navigate to="/login" replace state={{ path: location.pathname }} />;
};

export default RequireAuth;
