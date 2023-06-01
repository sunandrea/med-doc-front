import plug from '../../images/ProfileBlock/plug.png';
import css from './DoctorInfoCard.module.css';

export const DoctorInfoCard = ({ doctorData }) => {
    return (
        <div className={css.doctorInfo}>
            <div className={css.imgWrapper}>
                <img src={doctorData.avatar ? doctorData.avatar : plug} alt="avatar" className={css.photo} />
            </div>
            <div>
                <h3 className={css.doctorName}>{doctorData.name}</h3>
                <p className={css.doctorSpecialization}>{doctorData.line}</p>
            </div>
        </div>
    );
};
