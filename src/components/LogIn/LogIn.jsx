import React from "react";
import s from "./LogIn.module.css"

const LogIn = (props) =>
{
    let username_change = (e) => {
        const action = {
            type: 'UPDATE_LOGIN_USERNAME_TEXT',
            text: e.target.value
        };
        props.dispatch(action);
    };

    let password_change = (e) => {
        const action = {
            type: 'UPDATE_LOGIN_PASSWORD_TEXT',
            text: e.target.value
        };
        props.dispatch(action);
    };

    let log_in = () => {
        const action = {
            type: 'ENTER',
            username: props.state.username
        }
        props.dispatch(action);
    }

    return (
        <div className={s.Login}>
        <div className={s.item}>
            Username: <input value={props.state.username} name="FirstName" onChange={username_change}/>
        </div>
        <div className={s.item}>
            Password: <input value={props.state.password} name="FirstName" onChange={password_change}/>
        </div>
        <div className={s.button}>
            <ref onClick={log_in}> Log in </ref>
        </div>
    </div>
    )
}

export default LogIn;