import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let dialogElement = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElement = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    let AddNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <AddMessageForm onSubmit={AddNewMessage}/>
            </div>
        </div>
    );
};



export default Dialogs;