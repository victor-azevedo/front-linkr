import { createContext, useState } from "react";

export const authContext = createContext();

export default function AuthProvider({children}){

    const [auth, setAuth] = useState(null);

    return (
        <authContext.Provider value={[auth, setAuth]}>
            {children}
        </authContext.Provider>
    )
}
