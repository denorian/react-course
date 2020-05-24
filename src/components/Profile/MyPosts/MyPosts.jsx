import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.posts.map(
        p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
    );

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postBlock}>
            My posts
            <h3>New posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostText"}/>
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm({form: "AddNewPostForm"})(AddNewPostForm);

export default MyPosts;