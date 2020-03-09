import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://hsto.org/webt/bf/6m/q3/bf6mq3wmejwlzxaiuiseo0idri0.png"/>
            {props.message}

            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;