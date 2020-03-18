const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "Init post", likesCount: 1}
            ],
            newPostText: 'placeholder text'
        },
        dialogsPage: {
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
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    addPost(newPost) {
        let post = {
            id: 8,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(post);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updatePostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let post = {
                id: 8,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(post);
            this._state.profilePage.newPostText = "";
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageText = action.body;
        } else if (action.type === SEND_MESSAGE) {

            let messsage = {
                id: 8,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messsageData.push(messsage);
            this._state.dialogsPage.newMessageText = "";
        }

        this._callSubscriber(this._state);
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default store;