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
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogData={props.appState.dialogData} messsageData={props.appState.messsageData}/>}/>
                    <Route path='/profile' render={() =>  <Profile postData={props.appState.post} addPost={props.addPost}/>}/>
                    <Route path='/news'>
                        this is news
                    </Route>

                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;