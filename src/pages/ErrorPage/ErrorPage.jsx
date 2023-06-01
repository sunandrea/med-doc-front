import Medic from '../../images/Medic@2x.png';
import css from './ErrorPage.module.css';

import { useState } from 'react';

export const ErrorPage = () => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const rotateEl = event => {
        const x = event.clientX;
        const y = event.clientY;

        const rotateXValue = -(y - window.innerHeight / 2) / 18;
        const rotateYValue = (x - window.innerWidth / 2) / 18;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    return (
        <main className={css.main} onMouseMove={rotateEl}>
            <section className={css.section}>
                <div className={css.err} style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>
                    <span className={css.errNo} style={{ justifyContent: 'flex-end' }}>
                        4
                    </span>
                    <img src={Medic} alt="Page not found" className={css.errEmg} />
                    <span className={css.errNo}>4</span>
                </div>
                <p className={css.errText}>
                    We’re sorry, the page you requested could not be found. Please go back to the homepage.
                </p>
            </section>
        </main>
    );
};
