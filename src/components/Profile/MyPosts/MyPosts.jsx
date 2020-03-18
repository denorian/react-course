import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../state/state";

const MyPosts = (props) => {
    let postsElements = props.state.profilePage.posts.map(
        p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        props.dispatch(onPostChangeActionCreator(newPostElement.current.value));
    };

    return (
        <div className={s.postBlock}>
            My posts
            <div>New posts</div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange}
                          value={props.state.profilePage.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;