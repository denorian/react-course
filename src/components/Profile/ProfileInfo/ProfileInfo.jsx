import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile || props.profile === undefined)
        return <Preloader/>;

    return (
        <div>
            <div>
                <img alt="123"
                     src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701793904.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={props.profile.name}/>
                Ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;