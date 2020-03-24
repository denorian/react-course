import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    return (
        <div className={s.content}>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                             <img className={s.userPhoto}
                                  src="https://d2hhj3gz5jljkm.cloudfront.net/assets2/144/105/615/616/normal/88005553535.jpg"/>
                        </div>
                        <div>
                            {
                                u.follow ?
                                <button onClick={() => (props.unfollow(u.id))}>unfollow</button> :
                                <button onClick={() => (props.follow(u.id))}>follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Users;