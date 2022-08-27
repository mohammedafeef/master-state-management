import { Dispatch, ReactNode } from "react";
import Actions from "./actions";

export interface User {
    username?: string;
    email?: string;
}

export interface UserContext {
    user: User,
    dispatch: Dispatch<UserAction>;
}

export interface UserProviderType {
    children: ReactNode;
}

export interface UserAction {
    type: Actions,
    payload?: { data?: User }
}