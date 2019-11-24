import React from "react"
import s from "./MainPage.module.css"
import CityLink from "./CityLink/CityLink";
import {Route} from "react-router-dom";

const MainPage = (props) => {
    return (
        <div className={s.Mainpage}>
            <div className={s.description}>
                Here you can see the difference between real temperature and its forecast during the last N days.
            </div>
            <div className={s.choose}>
                <CityLink link="moscow" text="Moscow" dispatch={props.dispatch} state={props.state}/>
                <CityLink link="petersburg" text="Saint-Petersburg" dispatch={props.dispatch} state={props.state}/>
                <CityLink link="new-york" text="New-York" dispatch={props.dispatch} state={props.state}/>
                <CityLink link="london" text="London" dispatch={props.dispatch} state={props.state}/>
                <CityLink link="paris" text="Paris" dispatch={props.dispatch} state={props.state}/>
            </div>
            <div className={s.graph}>
                <Route exact path="/main"> Choose the city </Route>
                <Route path="/main/moscow"> Graph for Moscow </Route>
                <Route path="/main/petersburg"> Graph for Saint-Petersburg </Route>
                <Route path="/main/new-york"> Graph for New-York </Route>
                <Route path="/main/london"> Graph for London </Route>
                <Route path="/main/paris"> Graph for Paris </Route>
            </div>
        </div>
    )
}

export default MainPage;