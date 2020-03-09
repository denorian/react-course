import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog} >
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

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Alex"/>
                <DialogItem id="2" name="Valera"/>
                <DialogItem id="3" name="Vlad"/>
                <DialogItem id="4" name="Marat"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="Hello"/>
                <Message message="How are you?"/>
                <Message message="Nice!"/>
            </div>
        </div>
    );
};

export default Dialogs