import React from 'react';
import facebook_mob from './facebook_mob.png';
import facebook_desk from './facebook_desk.png';
import s from './FooterIcon.module.css';

function FacebookIcon() {
    return (
        <a href="#">
            <img className={s.facebook_mob} src={facebook_mob} alt="facebook" />
            <img className={s.facebook_desk} src={facebook_desk} alt="facebook" />
        </a>
    );
}

export default FacebookIcon;
