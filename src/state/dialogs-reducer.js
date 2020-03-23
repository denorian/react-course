const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Valera"},
        {id: 3, name: "Vlad"},
        {id: 4, name: "Marat"},
        {id: 5, name: "Ignat"}
    ],
    messsageData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Nice!"},
        {id: 5, message: "And you?"},
    ],
    newMessageText: '',
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE:{
            let stateCopy = {...state};
            stateCopy.messsageData = [...state.messsageData];
            let messsage = {
                id: 8,
                message: stateCopy.newMessageText
            };
            stateCopy.messsageData.push(messsage);
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogReducer;