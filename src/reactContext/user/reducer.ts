import Actions from "./actions";
import { User, UserAction } from "./types";

const userReducer = (state: User, action: UserAction): User => {
    const { type, payload } = action;
    switch (type) {
        case Actions.login:
            return payload?.data ? payload.data : state;
        case Actions.logout:
            return {};
        default:
            return state;

    }
}

export default userReducer;