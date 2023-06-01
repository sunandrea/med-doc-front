import { IconButton } from '@mui/material';
import { ModalEditPatientResult } from 'components/ModalEditPatientResult/ModalEditPatientResult';
import { PatientMedcart } from 'components/PatientMedcart/PatientMedcart';
import { PatientMedcartAdd } from 'components/PatientMedcartAdd/PatientMedcartAdd';
import { PatientMedcartEdit } from 'components/PatientMedcartEdit/PatientMedcartEdit';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { RxPencil1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserInfoById } from 'redux/info/operation';
import { selectUserInfo, selectUserInfoById } from 'redux/info/selectors';
import { selectAllVisits } from 'redux/visits/selectors';
import style from './ListOfPatientsProfile.module.css';

export const ListOfPatientsProfile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [editMedcart, setEditMedcart] = useState(false);
    const [addMedcart, setAddMedcart] = useState(false);
    const [medcart, setMedcart] = useState([
        {
            title: 'Complaints at the time of inspection:',
            textList: '',
        },
        {
            title: 'Medical history:',
            textList: '',
        },
        {
            title: 'Objective condition at the time of inspection:',
            textList: '',
        },
        {
            title: 'Associated diseases:',
            textList: '',
        },
        {
            title: 'Assessment of body condition:',
            textList: '',
        },
        {
            title: 'Clinical diagnosis:',
            textList: '',
        },
        {
            title: 'Treatment recommendations:',
            textList: '',
        },
    ]);
    const [open, setOpen] = useState(false);

    const userInfo = useSelector(selectUserInfoById);
    const currentUser = useSelector(selectUserInfo);
    const allVisits = useSelector(selectAllVisits);

    useEffect(() => {
        dispatch(getUserInfoById(id));
        if (allVisits.length !== 0) {
            const currentVisit = allVisits.filter(el => el.patient._id === id);
            if (currentVisit.length !== 0) {
                console.log(currentVisit);
                setMedcart([
                    {
                        title: 'Complaints at the time of inspection:',
                        textList: currentVisit[0].complaints,
                    },
                    {
                        title: 'Medical history:',
                        textList: currentVisit[0].medicalHistory,
                    },
                    {
                        title: 'Objective condition at the time of inspection:',
                        textList: currentVisit[0].objectiveCondition,
                    },
                    {
                        title: 'Associated diseases:',
                        textList: currentVisit[0].associatedDiseases,
                    },
                    {
                        title: 'Assessment of body condition:',
                        textList: currentVisit[0].bodyCondition,
                    },
                    {
                        title: 'Clinical diagnosis:',
                        textList: currentVisit[0].clinicalDiagnosis,
                    },
                    {
                        title: 'Treatment recommendations:',
                        textList: currentVisit[0].recomendation,
                    },
                ]);
            }
        }
        // const clickedVisit = JSON.parse(localStorage.getItem('clickedVisit'));

        // eslint-disable-next-line
    }, [allVisits, id]);

    return (
        <>
            <div className={style.PatientInformation}>
                {userInfo && <ProfileBlockPatient userInfo={userInfo} />}
                <div className={style.PatientResults}>
                    <ul className={style.PatientResults_VisitRecord}>
                        <li key={currentUser?.name}>
                            Doctor:<span>{currentUser?.name}</span>
                        </li>
                        <li key="date">
                            Date:<span>{moment().format('MM/DD/YYYY')}</span>
                        </li>
                    </ul>
                    {/* {clickedVisit.files && (
                        <ul className={style.PatientResults_Details}>
                            {clickedVisit.files.map(({ fileName, fileURL }, index) => {
                                return (
                                    <li key={index}>
                                        <Icon color="primary">
                                            <UilFileAlt style={{ width: '20px', height: '20px' }} />
                                        </Icon>
                                        <Link href={fileURL}>{fileName}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    )} */}

                    <IconButton
                        color="primary"
                        sx={{ position: 'absolute', top: '16px', right: '16px' }}
                        onClick={() => setOpen(true)}
                    >
                        <RxPencil1 style={{ width: '20px', height: '20px' }} />
                    </IconButton>
                </div>
            </div>

            {!editMedcart && !addMedcart && (
                <PatientMedcart
                    medcart={medcart}
                    setAddMedcart={setAddMedcart}
                    setEditMedcart={setEditMedcart}
                    allVisits={allVisits}
                />
            )}
            {addMedcart && (
                <PatientMedcartAdd id={id} medcart={medcart} setMedcart={setMedcart} setAddMedcart={setAddMedcart} />
            )}
            {editMedcart && (
                <PatientMedcartEdit
                    id={id}
                    allVisits={allVisits}
                    medcart={medcart}
                    setEditMedcart={setEditMedcart}
                    setMedcart={setMedcart}
                />
            )}

            <ModalEditPatientResult
                // data={clickedVisit}
                id={id}
                // updatedAt={clickedVisit.updatedAt}
                doctor={currentUser?.name}
                // files={clickedVisit.files}
                open={open}
                setOpen={setOpen}
            />
        </>
    );
};
