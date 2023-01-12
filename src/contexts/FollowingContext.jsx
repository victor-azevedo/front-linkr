import { createContext, useState } from "react";

export const followingContext = createContext();

export default function FollowingProvider({ children }) {
  const [followersList, setFollowersList] = useState([]);

  return (
    <followingContext.Provider value={{ followersList, setFollowersList }}>
      {children}
    </followingContext.Provider>
  );
}
