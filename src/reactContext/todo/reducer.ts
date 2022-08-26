import ActionTypes from "./actions";
import { Todo, TodoAction } from "./types";

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.addTodo:
            return payload?.data ? [
                ...state,
                payload.data
            ] : state;
        case ActionTypes.deleteTodo:
            return state.filter((ele) => ele.id !== payload?.id);
        default:
            return state;

    }
}

export default todoReducer;