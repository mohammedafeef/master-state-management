import { todoContext } from ".";
import { useContext } from "react";
import { Todo } from "./types";
import ActionTypes from "./actions";

export const useAddTodo = () => {
    const { dispatch } = useContext(todoContext);
    return (data: Todo) => dispatch({ type: ActionTypes.addTodo, payload: { data } })
}

export const useDeleteTodo = () => {
    const { dispatch } = useContext(todoContext);
    return (id: string) => dispatch({ type: ActionTypes.deleteTodo, payload: { id } })
}