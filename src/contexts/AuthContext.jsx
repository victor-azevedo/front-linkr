import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

export const authContext = createContext();

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            axios
                .get(`${BASE_URL}/user`, { headers: { Authorization: `Bearer ${token}` } })
                .then(({ data }) => setAuth({ ...data, token: token }))
                .catch((err) => console.log(err));
        }
    }, [token]);

    return <authContext.Provider value={[auth, setAuth]}>{children}</authContext.Provider>;
}
