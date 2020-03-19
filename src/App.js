import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/profile'
                           render={() => <Profile store={props.store}/>}/>
                    <Route path='/news'>
                        this is news
                    </Route>

                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;