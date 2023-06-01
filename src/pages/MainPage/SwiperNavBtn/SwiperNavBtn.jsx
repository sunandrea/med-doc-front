import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { useSwiper } from 'swiper/react';
import s from '../SwiperNavBtn/SwiperNavBtn.module.css';
import { useState, useEffect } from 'react';

export const SwiperNavButtons = () => {
    const swiper = useSwiper();
    const [isLeftDisabled, setIsLeftDisabled] = useState(true);
    const [isRightDisabled, setIsRightDisabled] = useState(false);

    useEffect(() => {
        setIsLeftDisabled(swiper.isBeginning);
        setIsRightDisabled(swiper.isEnd);
    }, [swiper.isBeginning, swiper.isEnd]);

    const handleLeftButtonClick = () => {
        if (!swiper.isBeginning) {
            swiper.slidePrev();
            setIsRightDisabled(false);
        }
        setIsLeftDisabled(swiper.isBeginning);
    };

    const handleRightButtonClick = () => {
        if (!swiper.isEnd) {
            swiper.slideNext();
            setIsLeftDisabled(false);
        }
        setIsRightDisabled(swiper.isEnd);
    };

    return (
        <div className={s.swiper_nav_btns}>
            {swiper.isBeginning ? (
                <button className={`${s.btn} ${s.btnDisabled}`} disabled={true}>
                    <WestIcon />
                </button>
            ) : (
                <button
                    className={`${s.btn} ${isLeftDisabled ? s.btnDisabled : s.btnActive}`}
                    onClick={handleLeftButtonClick}
                    disabled={isLeftDisabled}
                >
                    <WestIcon />
                </button>
            )}
            <button
                className={`${s.btn} ${isRightDisabled ? s.btnDisabled : s.btnActive}`}
                onClick={handleRightButtonClick}
                disabled={isRightDisabled}
            >
                <EastIcon />
            </button>
        </div>
    );
};
