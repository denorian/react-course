import {connect} from "react-redux";
import Users from "./UsersClass";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);