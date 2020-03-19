import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../state/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    };

    let updateNewMessageBody = (body) => {
        props.dispatch(updateNewMessageBodyCreator(body));
    };

    return (<Dialogs dialogsPage={state.dialogsPage}
                     updateNewMessageBody={updateNewMessageBody}
                     sendMessage={sendMessage}
    />);
};

export default DialogsContainer;