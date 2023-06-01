import React from 'react';
import inst_mob from './inst_mob.png';
import inst_desk from './inst_desk.png';
import s from './FooterIcon.module.css';

function InstagramIcon() {
    return (
        <a href="#">
            <img className={s.inst_mob}  src={inst_mob} alt="instagram" />
            <img className={s.inst_desk}  src={inst_desk} alt="instagram" />
        </a>
    );
}

export default InstagramIcon;