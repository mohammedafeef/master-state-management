import { useContext } from "react";
import { userContext } from ".";

export const useUser = () => {
    const { user } = useContext(userContext);
    return user;
}