import React from 'react';
import youtube_mob from './youtube_mob.png';
import youtube_desk from './youtube_desk.png';
import s from './FooterIcon.module.css';

function YoutubeIcon() {
    return (
        <a href="#">
            <img className={s.youtube_mob} src={youtube_mob} alt="youtube" />
            <img className={s.youtube_desk} src={youtube_desk} alt="youtube" />
        </a>
    );
}

export default YoutubeIcon;