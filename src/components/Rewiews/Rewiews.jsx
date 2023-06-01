import { SwiperNavButtons } from 'components/SwiperNavBtn/SwiperNavBtn';
import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import maria from '../../images/Rewiews/maria.png';
import natalia from '../../images/Rewiews/natalia.png';
import sergey from '../../images/Rewiews/sergey.png';
import s from './Rewiews.module.css';

function Rewiews() {
    return (
        <div className={s.container}>
            <h2 className={s.rewiews_header}>Reviews</h2>
            <Swiper
                spaceBetween={50}
                modules={[Navigation, Pagination, A11y]}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                }}
                className={s.list}
            >
                <div className={s.slide_wrap}>
                    <SwiperSlide className={s.item}>
                        <img className={s.rewiew_img} width={64} height={64} src={maria} alt="" />
                        <p className={s.item_header}>Maria Tkachuk</p>
                        <p className={s.item_text}>
                            I recently used this medical platform to book an appointment with a specialist, and I was
                            impressed by how easy and user-friendly the process was. Highly recommended!
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className={s.item}>
                        <img className={s.rewiew_img} width={64} height={64} src={sergey} alt="" />
                        <p className={s.item_header}>Sergey Rybachok</p>
                        <p className={s.item_text}>
                            I had a great experience using this medical platform to access my health records. This
                            platform is a game-changer for managing my healthcare needs
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className={s.item}>
                        <img className={s.rewiew_img} width={64} height={64} src={natalia} alt="" />
                        <p className={s.item_header}>Natalia Chatuk</p>
                        <p className={s.item_text}>
                            I recently had a virtual appointment with my doctor through this medical platform, and I was
                            pleasantly surprised by how seamless the experience was.
                        </p>
                    </SwiperSlide>
                </div>
                <SwiperNavButtons />
            </Swiper>
        </div>
    );
}

export default Rewiews;
