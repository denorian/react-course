import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt="123"
                     src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701793904.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;