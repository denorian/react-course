import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../state/dialogs-reducer";

const Dialogs = (props) => {
    let dialogElement = props.state.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElement = props.state.dialogsPage.messsageData.map(m => <Message message={m.message}/>);
    let newMessageBody = props.state.dialogsPage.newMessageText;

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    };
    let updateNewMessageBody = (e) => {
        props.dispatch(updateNewMessageBodyCreator(e.target.value));
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