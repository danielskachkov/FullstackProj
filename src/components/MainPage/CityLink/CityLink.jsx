import React from "react";
import s from "./CityLink.module.css";
import {NavLink} from "react-router-dom";

const CityLink = (props) => {
    let change_city = () => {
        const action = {
            type: "CHANGE_CITY",
            city: "/" + props.link
        };

        props.dispatch(action);
    };

    return (
        <div className={s.item}>
            <NavLink to={"/main/" + props.link} onClick={change_city} activeClassName={s.active}> {props.text} </NavLink>
        </div>
    );
};

export default CityLink;