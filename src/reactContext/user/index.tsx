import { createContext } from "react";
import userReducer from "./reducer";
import { UserContext, UserProviderType } from "./types";
import { useReducer } from "react";

export const userContext = createContext({} as UserContext);

export const UserProvider = ({ children }: UserProviderType) => {
    const [user, dispatch] = useReducer(userReducer, {});
    return (
        <userContext.Provider value={{ user, dispatch }}>
            {children}
        </userContext.Provider>
    );
};
