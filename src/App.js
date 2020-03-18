import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";

const App = (props) => {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state}
                                              dispatch={props.dispatch}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           state={props.state}
                           addPost={props.addPost}
                           dispatch={props.dispatch}
                       />}/>
                <Route path='/news'>
                    this is news
                </Route>

            </div>
        </div>
    );
};


export default App;