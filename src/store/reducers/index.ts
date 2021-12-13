import { combineReducers } from "redux";
import { authReducer } from "../../view/Auth/Login/reduser";
import { ProductsReducer } from "../../view/Product/reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    product: ProductsReducer
});

export type RootState = ReturnType<typeof rootReducer>;