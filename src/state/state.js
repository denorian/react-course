import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Init post", likesCount: 1}
        ],
        newPostText: 'placeholder text'
    },
    dialogData: [
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
    ]
};

export let addPost = (newPost) => {
    let post = {
        id: 8,
        message: newPost,
        likesCount: 0
    };

    state.profilePage.posts.push(post);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}
export let updatePostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export default state;