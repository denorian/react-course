import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(
        p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value)
    };

    return (
        <div className={s.postBlock}>
            My posts
            <div>New posts</div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;