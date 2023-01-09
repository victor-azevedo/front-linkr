import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.BASE_URL}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => setAuth({ ...data, token: token }))
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <authContext.Provider value={[auth, setAuth]}>
      {children}
    </authContext.Provider>
  );
}
