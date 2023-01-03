import { useContext } from "react";
import { authContext } from "../contexts/AuthContext.jsx";

export const useAuth = () => useContext(authContext);
