import AnalysisBlock from 'components/AnalysisBlock/AnalysisBlock';
import ModalEditPatientProfile from 'components/ModalEditPatientProfile/ModalEditPatientProfile';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/info/selectors';

import { ModalMakeAppointment } from 'components/ModalMakeAppointment/ModalMakeAppointment';

export const PatientMedicalHistory = () => {
    const [modalAppointment, setModalAppointment] = useState(false);
    const [mmodalProfile, setMmodalProfile] = useState(false);
    const patientInfo = useSelector(selectUserInfo);

    return (
        <>
            {patientInfo && (
                <>
                    <ProfileBlockPatient
                        userInfo={patientInfo}
                        modalAppointment={modalAppointment}
                        setModalAppointment={setModalAppointment}
                        mmodalProfile={mmodalProfile}
                        setMmodalProfile={setMmodalProfile}
                    />
                    <div>
                        <AnalysisBlock />
                    </div>
                    <ModalEditPatientProfile userInfo={patientInfo} open={mmodalProfile} setApp={setMmodalProfile} />
                    {modalAppointment && <ModalMakeAppointment open={modalAppointment} setApp={setModalAppointment} />}
                </>
            )}
        </>
    );
};
