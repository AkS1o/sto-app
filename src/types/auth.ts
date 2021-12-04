export enum AuthActionTypes {
    LOGIN_AUTH = "LOGIN_AUTH",
    LOGIN_AUTH_SUCCESS = "LOGIN_AUTH_SUCCSES",
    LOGIN_AUTH_ERROR= "LOGIN_AUTH_ERROR",
}

export interface IUser {
    email: string,
    image: string 
}

export interface AuthState {
    user: IUser,
    isAuth: boolean,
    loading: boolean,
    error: null | string,
}

export interface LoginAuthAction {
    type: AuthActionTypes.LOGIN_AUTH
}

export interface LoginAuthSuccsesAction {
    type: AuthActionTypes.LOGIN_AUTH_SUCCESS,
    payload: IUser
}

export interface LoginAuthError {
    type: AuthActionTypes.LOGIN_AUTH_ERROR,
    payload: string
}

export type AuthAction = LoginAuthAction | LoginAuthSuccsesAction | LoginAuthError;