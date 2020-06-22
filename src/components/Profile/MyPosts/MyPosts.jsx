import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required,maxLenghtCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";

const maxLenght10 = maxLenghtCreator(10);
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea}  validate={[required, maxLenght10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm({form: "AddNewPostForm"})(AddNewPostForm);


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

export default MyPosts;