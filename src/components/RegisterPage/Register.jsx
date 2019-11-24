import React, {Component} from "react"
import s from "./Register.module.css"
import RegisterReducer from "../../redux/RegisterReducer";


const Register = (props) =>
{
    let username_change = (e) => {
        const action = {
            type: 'UPDATE_REGISTER_USERNAME_TEXT',
            text: e.target.value
        };
        props.dispatch(action);
    };

    let password_change = (e) => {
        const action = {
            type: 'UPDATE_REGISTER_PASSWORD_TEXT',
            text: e.target.value
        };
        props.dispatch(action);
    };


        return (
        <div className={s.Register}>
            <div className={s.item}>
                Username: <input value={props.state.username} onChange={username_change}/>
            </div>
            <div className={s.item}>
                Password: <input value={props.state.password} onChange={password_change}/>
            </div>
            <div className={s.button}>
                <ref> Register </ref>
            </div>
        </div>
        )

}

export default Register;