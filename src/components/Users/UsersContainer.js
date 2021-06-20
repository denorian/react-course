import React from 'react';
import Users from "./Users"
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowing,
    requestUsers
} from "../../redux/user-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {followingInProgress, getCurrentPage, getPageSize, getTotalUsersCount, getUsers, isFetching} from "../../redux/user-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}
                    toggleIsFollowing={this.props.toggleIsFollowing}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state)
    };
};

let mapDispatchToProps = {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowing,
    getUsers: requestUsers
};

export default compose(connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)