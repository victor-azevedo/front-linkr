import { useContext } from "react";
import { followingContext } from "../contexts/FollowingContext.jsx";

export const useFollowing = () => useContext(followingContext);
