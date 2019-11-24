import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar"
import MainPage from "./components/MainPage/MainPage";
import Author from "./components/Author/Author";
import Register from "./components/RegisterPage/Register";
import LogIn from "./components/LogIn/LogIn"
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
        <div className={s.App}>
            <div className={s.Header}>
                <Header dispatch = {props.dispatch} state = {props.state.Header}/>
            </div>
            <div className={s.Navbar}>
                <NavBar city={props.state.MainPage.city}/>
            </div>
            <div className={s.Content}>
                <Route path={"/main"} render={() => <MainPage dispatch={props.dispatch} state={props.state.MainPage}/>}/>
                <Route path="/author" component={Author}/>
                <Route path="/registration" render={() => <Register dispatch={props.dispatch} state = {props.state.Register}/>}/>
                <Route path="/login" render={() => <LogIn dispatch={props.dispatch} state = {props.state.LogIn}/>}/>
            </div>
        </div>
  );
};

export default App;
