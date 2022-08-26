import { Dispatch, ReactNode } from "react";
import ActionTypes from "./actions";

export interface Todo {
    id: string;
    content: string;
}

export interface TodoContext {
    todos: Todo[],
    dispatch: Dispatch<TodoAction>;
}

export interface TodoProviderType {
    children: ReactNode;
}

export interface TodoAction {
    type: ActionTypes,
    payload?: { id?: string, data?: Todo }
}