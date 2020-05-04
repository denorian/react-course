import s from "./Users.module.css";
import React from "react";
import defaultImage from '../../assets/images/cat.jpg'
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div className={s.content}>
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p && s.selectedItem}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {props.users.map(user =>
            <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                             <img className={s.userPhoto}
                                  alt="cat"
                                  src={user.photos.small != null ? user.photos.small : defaultImage}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => {props.unfollow(user.id)}}>unfollow</button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {props.follow(user.id)}}>follow</button>
                            }
                        </div>
                    </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
            </div>
        )}
    </div>
};
export default Users;