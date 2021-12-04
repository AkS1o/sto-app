import React from "react";
import InputGroup from "../../../components/InputGroup";

const hendlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
}

const hendlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit");
}

const Register: React.FC = () => {
    return (
        <>
            <h1>Register</h1>
            <form onSubmit={hendlerSubmit}>
                <InputGroup label="Name" field="name" type="text" onChange={hendlerChange}/>
                <InputGroup label="Email" field="email" type="email" onChange={hendlerChange}/>
                <InputGroup label="Password" field="password" type="password" onChange={hendlerChange}/>
                <InputGroup label="Confirm Password" field="passwordConfirm" type="password" onChange={hendlerChange}/>
                <button type="submit" className="btn btn-primary">Registration</button>
            </form>
        </>
    )
}

export default Register;