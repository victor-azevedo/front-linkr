import { createContext, useState } from "react";

export const userDataContext = createContext();

export default function UserDataProvider({ children }) {
  const userDataLocal = localStorage.getItem("userData");

  const [userData, setUserData] = useState(JSON.parse(userDataLocal));

  return (
    <userDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </userDataContext.Provider>
  );
}
