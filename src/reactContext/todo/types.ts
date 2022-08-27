import { Dispatch, ReactNode } from "react";
import Actions from "./actions";

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
    type: Actions,
    payload?: { id?: string, data?: Todo }
}