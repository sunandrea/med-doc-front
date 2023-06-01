import AnalysisBlock from 'components/AnalysisBlock/AnalysisBlock';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';
import css from './MedicalHistoryPage.module.css';

export const MedicalHistoryPage = () => {
    return (
        <section className={css.section}>
            <ProfileBlockPatient />
            <AnalysisBlock />
        </section>
    );
};
