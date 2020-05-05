import React from 'react';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
       let userId = this.props.match.params.userId;
       if(!userId)
           userId = 6652;

       this.props.getUserProfile(userId);
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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let withRouterProfileContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile}) (withRouterProfileContainer);