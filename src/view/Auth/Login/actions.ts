import { Dispatch } from "react";
import jwt from 'jsonwebtoken';
import {
    ILoginModel,
    ILoginResponse,
    LoginServerError,
    AuthAction,
    AuthActionTypes,
    IUser,
    LoginAction,
} from "./types";
import axios, { AxiosError } from "axios";

import http from "../../../http_common";

export const LoginUser = (data: ILoginModel) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const response = await http.post<ILoginResponse>("api/auth/login", data);
            const { access_token } = response.data;
            
            localStorage.token = access_token;
            AuthUser(access_token, dispatch);

            console.log("End redux login", response.data);
            return Promise.resolve();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<LoginServerError>;
                if (serverError && serverError.response) {
                    return Promise.reject(serverError.response.data);
                }
            }

            return Promise.reject(error);
        }
    };
};

export const AuthUser = (token: string, dispatch: Dispatch<AuthAction>) => {
    const user = jwt.decode(token) as IUser;
    dispatch({
        type: AuthActionTypes.LOGIN,
        payload: user,
    });
}