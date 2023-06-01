import { FAQ } from 'components/FAQ/FAQ';

import bag from '../../images/ChosenBlock/bag.png';
import cross from '../../images/ChosenBlock/cross.png';
import line from '../../images/ChosenBlock/line.png';
import tablet from '../../images/ChosenBlock/tablet.png';
import s from './MainPage.module.css';

import card from '../../images/DoctorAppointment/card.png';
import card_mobile from '../../images/DoctorAppointment/card_mobile.png';
import meet from '../../images/DoctorAppointment/meet.png';
import meet_mobile from '../../images/DoctorAppointment/meet_mobile.png';
import phone from '../../images/DoctorAppointment/phone.png';
import phone_mobile from '../../images/DoctorAppointment/phone_mobile.png';
import AppointmentSteps from './AppointmentSteps/AppointmentSteps';

import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import maria from '../../images/Rewiews/maria.png';
import natalia from '../../images/Rewiews/natalia.png';
import sergey from '../../images/Rewiews/sergey.png';
import { SwiperNavButtons } from './SwiperNavBtn/SwiperNavBtn';

import { Typography } from '@mui/material';

export const MainPage = () => {
    return (
        <div>
            <section className="chosen section">
                <Typography
                    variant="h2"
                    color="text.black"
                    sx={{ fontSize: { md: '44px' }, lineHeight: { md: 1.09 }, mb: '40px' }}
                >
                    We are chosen
                </Typography>
                <ul className={s.chosen_list}>
                    <li className={s.chosen_item}>
                        <div className={s.image_wrapper}>
                            <img src={bag} className={s.img} alt="bag"></img>
                        </div>
                        <p className={s.chosen_text}>Quick communication with the clinic and doctors</p>
                    </li>
                    <li className={s.chosen_item}>
                        <div className={s.image_wrapper}>
                            <img src={line} className={s.img} alt="line"></img>
                        </div>
                        <p className={s.chosen_text}>Convenient access to health data</p>
                    </li>
                    <li className={s.chosen_item}>
                        <div className={s.image_wrapper}>
                            <img src={tablet} className={s.img} alt="tablet"></img>
                        </div>
                        <p className={s.chosen_text}>Quick access to recipes</p>
                    </li>
                    <li className={s.chosen_item}>
                        <div className={s.image_wrapper}>
                            <img src={cross} className={s.img} alt="cross"></img>
                        </div>
                        <p className={s.chosen_text}>Make an appointment online or offline</p>
                    </li>
                </ul>
            </section>
            <section className="appointment section">
                <Typography
                    variant="h2"
                    color="text.black"
                    sx={{ fontSize: { md: '44px' }, lineHeight: { md: 1.09 }, mb: '40px' }}
                >
                    How to make an appointment with a doctor
                </Typography>
                <ul className={s.appointment_list}>
                    <li className={s.appointment_card}>
                        <img className={s.phone_img} src={phone} alt="phone" />
                        <img className={s.phone_mobile_img} src={phone_mobile} alt="phone" />
                        <p className={s.card_text}>
                            <span className={s.appointment_card_number}>1.</span> Choose a doctor and make an
                            appointment at a convenient time
                        </p>
                    </li>
                    <li className={s.appointment_card}>
                        <img className={s.meet_img} src={meet} alt="meet" />
                        <img className={s.meet_mobile_img} src={meet_mobile} alt="meet" />
                        <p className={s.card_text}>
                            <span className={s.appointment_card_number}>2.</span> Come to the appointment at the
                            specified time without queuing
                        </p>
                    </li>
                    <li className={s.appointment_card}>
                        <img className={s.card_img} src={card} alt="card" />
                        <img className={s.card_mobile_img} src={card_mobile} alt="card" />
                        <p className={s.card_text}>
                            <span className={s.appointment_card_number}>3.</span> Track your medical record and doctor's
                            appointments online
                        </p>
                    </li>
                </ul>
                <AppointmentSteps />
            </section>
            <section className="reviews section">
                <Typography
                    variant="h2"
                    color="text.black"
                    sx={{ fontSize: { md: '44px' }, lineHeight: { md: 1.09 }, mb: '40px' }}
                >
                    Reviews
                </Typography>
                <Swiper
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className={s.list}
                >
                    <div>
                        <SwiperSlide className={s.item}>
                            <img className={s.rewiew_img} width={64} height={64} src={maria} alt="" />
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                component="p"
                                sx={{
                                    fontSize: { md: '20px' },
                                    lineHeight: { md: 1.5 },
                                    mb: '8px',
                                }}
                            >
                                Maria Tkachuk
                            </Typography>
                            <Typography
                                variant="tex"
                                color="text.gray"
                                component="p"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                I recently used this medical platform to book an appointment with a specialist, and I
                                was impressed by how easy and user-friendly the process was. Highly recommended!
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide className={s.item}>
                            <img className={s.rewiew_img} width={64} height={64} src={sergey} alt="" />
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                component="p"
                                sx={{
                                    fontSize: { md: '20px' },
                                    lineHeight: { md: 1.5 },
                                    mb: '8px',
                                }}
                            >
                                Sergey Rybachok
                            </Typography>
                            <Typography
                                variant="tex"
                                color="text.gray"
                                component="p"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                I had a great experience using this medical platform to access my health records. This
                                platform is a game-changer for managing my healthcare needs
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide className={s.item}>
                            <img className={s.rewiew_img} width={64} height={64} src={natalia} alt="" />
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                component="p"
                                sx={{
                                    fontSize: { md: '20px' },
                                    lineHeight: { md: 1.5 },
                                    mb: '8px',
                                }}
                            >
                                Natalia Chatuk
                            </Typography>
                            <Typography
                                variant="tex"
                                color="text.gray"
                                component="p"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                I recently had a virtual appointment with my doctor through this medical platform, and I
                                was pleasantly surprised by how seamless the experience was.
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide className={s.item}>
                            <img className={s.rewiew_img} width={64} height={64} src={maria} alt="" />
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                component="p"
                                sx={{
                                    fontSize: { md: '20px' },
                                    lineHeight: { md: 1.5 },
                                    mb: '8px',
                                }}
                            >
                                Maria Tkachuk
                            </Typography>
                            <Typography
                                variant="tex"
                                color="text.gray"
                                component="p"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                I recently used this medical platform to book an appointment with a specialist, and I
                                was impressed by how easy and user-friendly the process was. Highly recommended!
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide className={s.item}>
                            <img className={s.rewiew_img} width={64} height={64} src={sergey} alt="" />
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                component="p"
                                sx={{
                                    fontSize: { md: '20px' },
                                    lineHeight: { md: 1.5 },
                                    mb: '8px',
                                }}
                            >
                                Sergey Rybachok
                            </Typography>
                            <Typography
                                variant="tex"
                                color="text.gray"
                                component="p"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                I had a great experience using this medical platform to access my health records. This
                                platform is a game-changer for managing my healthcare needs
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide className={s.item}>
                            <img className={s.rewiew_img} width={64} height={64} src={natalia} alt="" />
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                component="p"
                                sx={{
                                    fontSize: { md: '20px' },
                                    lineHeight: { md: 1.5 },
                                    mb: '8px',
                                }}
                            >
                                Natalia Chatuk
                            </Typography>
                            <Typography
                                variant="tex"
                                color="text.gray"
                                component="p"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                I recently had a virtual appointment with my doctor through this medical platform, and I
                                was pleasantly surprised by how seamless the experience was.
                            </Typography>
                        </SwiperSlide>
                    </div>
                    <SwiperNavButtons />
                </Swiper>
            </section>
            <FAQ />
        </div>
    );
};
