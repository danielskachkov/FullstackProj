import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";

const NavBar = (props) => {
    return(
        <div>
            <div className={s.item}>
            <NavLink to={"/main" + props.city} activeClassName={s.active}> Main </NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="/author" activeClassName={s.active}> About Author </NavLink>
            </div>
        </div>
    );
}

export default NavBar;