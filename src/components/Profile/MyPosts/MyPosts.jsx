import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.state.profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost(newPostElement.current.value);
    };

    let onPostChange = () => {
       let text = newPostElement.current.value;
       props.updatePostText(text);
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