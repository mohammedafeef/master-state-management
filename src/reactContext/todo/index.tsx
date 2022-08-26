import { createContext } from "react";
import todoReducer from "./reducer";
import { TodoContext, TodoProviderType } from "./types";
import { useReducer } from "react";

export const todoContext = createContext({} as TodoContext);

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <todoContext.Provider value={{ todos, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};
