import { Dispatch } from 'react';

import http from '../../http_common';
import { AuthAction, AuthActionTypes } from '../../types/auth';
import { ILoginModel, ILoginResponse } from '../../view/Auth/Login/types';

export const LoginUser = (data: ILoginModel) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            //dispatch({ type: AuthActionTypes.LOGIN_AUTH });
            const response = await http.post<ILoginResponse>('api/auth/login', data);
            dispatch({
                type: AuthActionTypes.LOGIN_AUTH_SUCCESS, payload: {
                    email: "sdf@asf.ssd", image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                }
            });

            console.log("redux end login", response.data);
            return Promise.resolve();
        }
        catch (error) {
            //dispatch({ type: AuthActionTypes.LOGIN_AUTH_ERROR, payload: "Error" });

            return Promise.reject(error);
        }
    }
}