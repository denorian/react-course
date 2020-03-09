import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

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

let dialogElement = dialogData.map(d => <DialogItem id={d.id} name={d.name}/>);
let messageElement = messsageData.map(m => <Message message={m.message}/>)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    );
};

export default Dialogs;