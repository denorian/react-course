import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {setUserProfileActionCreator} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
       let userId = this.props.match.params.userId;
       if(!userId)
           userId = 2;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(responce => {
                this.props.setUserProfileActionCreator(responce.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


let withRouterProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfileActionCreator}) (withRouterProfileContainer);