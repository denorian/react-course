import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {
    let dialogElement = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElement = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.dialogsPage.newMessageText;

    let sendMessage = () => {
        props.sendMessage();
    };
    let updateNewMessageBody = (e) => {
        props.updateNewMessageBody(e.target.value);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={updateNewMessageBody}
                                  placeholder="enter your message"/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;