import {combineReducers, createStore} from "redux";
import dialogReducer from "../state/dialogs-reducer";
import profileReducer from "../state/profile-reducer";
import sidebarReducer from "../state/sidebar-reducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;