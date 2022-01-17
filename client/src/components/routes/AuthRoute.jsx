import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const RequireAuth = ({ children }) => {
  const [state, setState] = useContext(UserContext);

  const navigate = useNavigate();

  return state === true ? children : navigate("/login");
};

export default RequireAuth;
