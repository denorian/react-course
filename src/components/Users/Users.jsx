import s from "./Users.module.css";
import React from "react";

let Users = (props) => {

    const defaultImg = "https://d2hhj3gz5jljkm.cloudfront.net/assets2/144/105/615/616/normal/88005553535.jpg";

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
        {props.users.map(u =>
            <div key={u.id}>
                    <span>
                        <div>
                             <img className={s.userPhoto}
                                  alt="cat"
                                  src={u.photos.small != null ? u.photos.small : defaultImg}/>
                        </div>
                        <div>
                            {
                                u.followed ?
                                    <button onClick={() => (props.unfollow(u.id))}>unfollow</button> :
                                    <button onClick={() => (props.follow(u.id))}>follow</button>
                            }
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                        {/*    <div>{u.location.country}</div>
                            <div>{u.location.city}</div>*/}
                        </span>
                    </span>
            </div>
        )}
    </div>
};
export default Users;