import { userContext } from ".";
import { useContext } from "react";
import { User } from "./types";
import Actions from "./actions";

export const useLogin = () => {
    const { dispatch } = useContext(userContext);
    return (data: User) => dispatch({ type: Actions.login, payload: { data } })
}

export const useLogout = () => {
    const { dispatch } = useContext(userContext);
    return () => dispatch({ type: Actions.logout })
}