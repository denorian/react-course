import React from 'react';
import s from './Users.module.css'
import axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
            this.props.setUsers(responce.data.items)
        });
    }

    render() {
        const defaultImg = "https://d2hhj3gz5jljkm.cloudfront.net/assets2/144/105/615/616/normal/88005553535.jpg";

        return (
            <div className={s.content}>
                {this.props.users.map(u =>
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
                                    <button onClick={() => (this.props.unfollow(u.id))}>unfollow</button> :
                                    <button onClick={() => (this.props.follow(u.id))}>follow</button>
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
        );
    }
}

export default Users;