import { useState } from "react";
import { useFormik, Form, FormikProvider } from 'formik';

import { useActions } from "../../../hooks/useActions";
import { validationFields } from './validation';
import { ILoginModel } from "./types";

import InputGroup from "../../../components/InputGroup";

const Login: React.FC = () => {

    const { LoginUser } = useActions();

    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const [state, setState] = useState<ILoginModel>({
        email: "",
        password: "",
    });

    const initialValues: ILoginModel = { email: '', password: '' };

    const hendlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,

        })
    };

    const onHandleSubmit = async (values: ILoginModel) => {
        console.log("values submit: ", values);
        return;
        try {
            setIsSubmit(true);
            console.log("Login begin form");
            await LoginUser(state);
            console.log("submit form", state);
            setIsSubmit(false);
        } catch (ex) {
            console.log("problem form");
            setIsSubmit(false);
        }
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationFields,
        onSubmit: onHandleSubmit

    });

    const { errors, touched, handleChange, handleSubmit } = formik;

    return (
        <>
            <h1>Login</h1>
            <FormikProvider value={formik} >
                <Form onSubmit={handleSubmit}>
                    <InputGroup
                        label="Email"
                        field="email"
                        type="email"
                        error={errors.email}
                        touched={touched.email}
                        onChange={handleChange} />
                    <InputGroup
                        label="Password"
                        field="password"
                        type="password"
                        error={errors.password}
                        touched={touched.password}
                        onChange={handleChange} />
                    <button type="submit" className="btn btn-primary" disabled={isSubmit}>Login</button>
                </Form>
            </FormikProvider>
        </>
    )
}

export default Login;