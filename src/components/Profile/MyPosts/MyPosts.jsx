import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {message: "Hi, how are you?", likesCount: 12},
        {message: "It's my first post", likesCount: 11}
    ];

    let postElements = postData.map(p =>  <Post message={p.message} likesCount={p.likesCount}/>);

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