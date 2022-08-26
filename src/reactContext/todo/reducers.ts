import { todoContext } from ".";
import { useContext } from "react";
import { Todo } from "./types";
import ActionTypes from "./actions";

export const useAddTodo = (data: Todo) => {
    const { dispatch } = useContext(todoContext);
    return dispatch({ type: ActionTypes.addTodo, payload: { data } })
}

export const useDeleteTodo = (id: string) => {
    const { dispatch } = useContext(todoContext);
    return dispatch({ type: ActionTypes.deleteTodo, payload: { id } })
}