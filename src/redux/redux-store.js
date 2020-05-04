import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;