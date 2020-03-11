import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef()

    let addPost = () => {
        alert(newPostElement.current.value);
        props.addPost(newPostElement.current.value);
    }

    return (
        <div className={s.postBlock}>
            My posts
            <div>New posts</div>
            <div>
                <textarea ref={newPostElement}/>
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