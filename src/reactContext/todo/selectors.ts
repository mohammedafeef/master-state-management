import { useContext } from "react";
import { todoContext } from ".";

export const useTodo = () => {
    const { todos } = useContext(todoContext);
    return todos;
}