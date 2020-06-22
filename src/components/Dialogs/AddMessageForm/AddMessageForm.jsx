import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormControls";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";

const maxLenght100 = maxLenghtCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newMessageBody"
                       validate={[required, maxLenght100]}
                       placeholder="enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);