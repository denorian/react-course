import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../state/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text));
    };

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={onAddPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />);
};

export default MyPostsContainer;