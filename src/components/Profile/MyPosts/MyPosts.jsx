import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.postData.map(p =>  <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postBlock}>
            My posts
            <div>New posts</div>
            <div>
                <textarea/>
            </div>
            <div>
                <button>add</button>
            </div>
            <div className={s.posts}>
               {postElements}
            </div>
        </div>
    );
};

export default MyPosts;