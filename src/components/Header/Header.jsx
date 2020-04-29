import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://avatars.mds.yandex.net/get-pdb/1607455/c4840727-e476-4fa1-a9b9-2dc17aa2850a/s1200?webp=false' alt='100'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;