import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {
    let dialogElement = props.dialogData.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElement = props.messsageData.map(m => <Message message={m.message}/>)

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