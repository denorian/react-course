import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state, action);

        this._callSubscriber(this._state);
    }
};


export default store;