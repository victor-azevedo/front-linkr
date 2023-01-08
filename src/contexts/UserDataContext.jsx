import { createContext, useContext, useState } from "react";

export const userDataContext = createContext();

export default function UserDataProvider({ children }) {
  const [userData, setUserData] = useState({});

  return (
    <userDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </userDataContext.Provider>
  );
}

