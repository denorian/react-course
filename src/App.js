import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";

let dialogData = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Valera"},
    {id: 3, name: "Vlad"},
    {id: 4, name: "Marat"},
    {id: 5, name: "Ignat"}
];

let messsageData = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Hello"},
    {id: 3, message: "How are you?"},
    {id: 4, message: "Nice!"},
    {id: 5, message: "And you?"},
];
let postData = [
    {message: "Hi, how are you?", likesCount: 12},
    {message: "It's my first post", likesCount: 11},
    {message: "Init post", likesCount: 1}
];

const App = () => {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'>
                        <Dialogs dialogData={dialogData} messsageData={messsageData} />
                    </Route>
                    <Route path='/profile'>
                        <Profile postData={postData} />
                    </Route>
                    <Route path='/news'>
                        this is news
                    </Route>

                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;