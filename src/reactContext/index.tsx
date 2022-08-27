import { ReactNode } from "react";
import { UserProvider } from "./user";
import { TodoProvider } from "./todo";

interface Props {
    children: ReactNode;
}
const ReactContextProvider = ({ children }: Props) => {
    return (
        <UserProvider>
            <TodoProvider>
                {children}
            </TodoProvider>
        </UserProvider>
    )
}

export default ReactContextProvider;