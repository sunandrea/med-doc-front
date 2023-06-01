import { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import card from '../../../images/DoctorAppointment/card.png';
import meet from '../../../images/DoctorAppointment/meet.png';
import phone from '../../../images/DoctorAppointment/phone.png';
import s from './AppointmentSteps.module.css';

function AppointmentSteps() {
    return (
        <Swiper
            className={s.swiper}
            spaceBetween={16}
            slidesPerView={2}
            modules={[Scrollbar]}
            scrollbar={{ draggable: true, scrollbar: '.scrollbar' }}
        >
            <SwiperSlide className={s.swiper_slide}>
                <li className={s.card_wrapper}>
                    <img className={s.phone_img} src={phone} alt="phone" />
                    <p className={s.card_text}>
                        <span className={s.card_number}>1.</span> Choose a doctor and make an appointment at a
                        convenient time
                    </p>
                </li>
            </SwiperSlide>
            <SwiperSlide className={s.swiper_slide}>
                <li className={s.card_wrapper}>
                    <img className={s.meet_img} src={meet} alt="meet" />
                    <p className={s.card_text}>
                        <span className={s.card_number}>2.</span> Come to the appointment at the specified time without
                        queuing
                    </p>
                </li>
            </SwiperSlide>
            <SwiperSlide className={s.swiper_slide}>
                <li className={s.card_wrapper}>
                    <img className={s.card_img} src={card} alt="card" />
                    <p className={s.card_text}>
                        <span className={s.card_number}>3.</span> Track your medical record and doctor's appointments
                        online
                    </p>
                </li>
            </SwiperSlide>
        </Swiper>
    );
}

export default AppointmentSteps;
