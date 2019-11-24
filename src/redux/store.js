import {combineReducers, createStore} from "redux";
import RegisterReducer from "./RegisterReducer";
import HeaderReducer from "./HeaderReducer";
import LogInReducer from "./LogInReducer";
import MainPageReducer from "./MainPageReducer";

let reducers = combineReducers({
    MainPage: MainPageReducer,
    Register: RegisterReducer,
    Header: HeaderReducer,
    LogIn: LogInReducer
});

let store = createStore(reducers);

export default store;