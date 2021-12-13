import * as AuthActionCreators from "../../view/Auth/Login/actions";
import * as RegisretActionCreators from "../../view/Auth/Register/actions";
import * as ProductActionCreators from '../../view/Product/actions';

const action = {
    ...AuthActionCreators,
    ...RegisretActionCreators,
    ...ProductActionCreators
}

export default action;