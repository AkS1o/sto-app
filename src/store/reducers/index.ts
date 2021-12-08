import { combineReducers } from "redux";
import { authReducer } from "../../view/Auth/Login/reduser";

export const rootReducer = combineReducers({
    auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;