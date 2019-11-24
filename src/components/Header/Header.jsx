import React from "react"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {

    const exit = () => {
        const action = {
            type: 'QUIT'
        };

        props.dispatch(action);
    };

    if(props.state.username !== "__NOT__AUTHORISED__")
    {
        return (
            <div>
                <div className={s.greeting}>
                    Hello {props.state.username}!
                </div>
                <div className={s.exit}>
                <ref onClick={exit}> Exit </ref>
                </div>
            </div>)
    }
    else
        {
        return (
            <div className={s.Header}>
                <div/>
                <div className={s.item}>
                    <NavLink to="/registration">Register</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/login"> Log in </NavLink>
                </div>
            </div>
        )
    }
}

export default Header;

