import { useContext } from "react";
import { userDataContext } from "../contexts/UserDataContext.jsx";

export const useUserData = () => useContext(userDataContext);
