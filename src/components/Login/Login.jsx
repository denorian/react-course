import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"login"} validate={required} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={Input} name={"password"} validate={required} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={Input} name={"remember-me"} type="checkbox"/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>);
};

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);
export default Login;