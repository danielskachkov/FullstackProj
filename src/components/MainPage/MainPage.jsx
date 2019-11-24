import React from "react"
import s from "./MainPage.module.css"
import {Route, BrowserRouter, NavLink} from "react-router-dom";

const MainPage = () => {
    return (
        <div className={s.Mainpage}>
            <div className={s.description}>
                Here you can see the difference between real temperature and its forecast.
        </div>
        <div className={s.choose}>
            <div className={s.item}>
                <NavLink to="/main/moscow" activeClassName={s.active}> Moscow </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/main/petersburg" activeClassName={s.active}> Saint-Petersburg </NavLink>
            </div>
        </div>
        <div className={s.graph}>
            <Route path="/main/moscow"> Graph for Moscow </Route>
            <Route path="/main/petersburg"> Graph for Saint-Petersburg </Route>
        </div>
        </div>
    )
}

export default MainPage;