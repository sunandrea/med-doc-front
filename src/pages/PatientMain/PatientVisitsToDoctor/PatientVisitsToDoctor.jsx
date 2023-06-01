import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { DatePickerMonth } from 'components/DatePickers/DatePickerMonth';
import { ModalEditRating } from 'components/ModalEditRating/ModalEditRating';
import dayjs from 'dayjs';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DoctorInfoCard } from '../../../components/DoctorInfoCard/DoctorInfoCard';
import plug from '../../../images/ProfileBlock/plug.png';
import { getCurrentUserAppointments } from '../../../redux/appointment/operation';
import { selectCurrentUserAppointments } from '../../../redux/appointment/selectors';
import { updateUserRating } from '../../../redux/info/operation';
import css from './PatientVisitsToDoctor.module.css';

export const PatientVisitsToDoctor = () => {
    const [selectedDoctorData, setSelectedDoctorData] = useState(null);
    const [selectedDate, setSelectedDate] = useState(dayjs(Date.now()).startOf('month'));
    const [isOpen, setIsOpen] = useState(false);
    const allVisits = useSelector(selectCurrentUserAppointments);
    const dispatch = useDispatch();

    const selectetVisits =
        allVisits && allVisits.filter(item => moment(item.date).format('MMMM') === selectedDate.format('MMMM'));

    console.log(selectetVisits);

    useEffect(() => {
        dispatch(getCurrentUserAppointments());
    }, [dispatch]);

    const openModal = doctorData => {
        setSelectedDoctorData(doctorData);
        setIsOpen(true);
    };

    const closeModal = (value, doctor) => {
        const newRating = {
            id: doctor,
            rating: value,
        };
        dispatch(updateUserRating(newRating));
        setSelectedDoctorData(null);
        setIsOpen(false);
    };

    return (
        <section className="section">
            <Typography
                variant="subtitle"
                color="text.black"
                sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 }, marginBottom: '16px', display: 'block' }}
            >
                Visits
            </Typography>
            <DatePickerMonth setSelectedDate={setSelectedDate} />
            <ul className={css.visitsList}>
                {selectetVisits &&
                    selectetVisits.map(({ doctor, date, _id, time }) => {
                        const doctorData = {
                            id: doctor._id,
                            name: doctor.name,
                            line: doctor.specialization,
                            avatar: doctor.avatarURL,
                            rating: doctor.rating,
                        };

                        return (
                            <li className={css.visitsItem} key={_id}>
                                <div className={css.doctorDetails}>
                                    <DoctorInfoCard doctorData={doctorData} />
                                    <div className={css.rating} onClick={() => openModal(doctorData)}>
                                        <Rating
                                            name="read-only"
                                            value={doctorData.rating}
                                            precision={0.5}
                                            readOnly
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                    </div>
                                </div>
                                <div className={css.visitInfo}>
                                    <p className={css.visitTitle}>Date of admission</p>
                                    <span className={css.visitDate}>{`${moment(date).format('MMMM')} ${moment(
                                        date
                                    ).format('DD/MM/YYYY')}`}</span>
                                    <span className={css.visitDate}>{time}</span>
                                </div>
                            </li>
                        );
                    })}
            </ul>
            {selectedDoctorData && (
                <ModalEditRating isOpen={isOpen} doctorData={selectedDoctorData} onClose={closeModal} plug={plug} />
            )}
        </section>
    );
};
