import { useState } from 'react';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Accordion } from '@mui/material';
import { Icon } from '@mui/material';
import { UilFileAlt } from '@iconscout/react-unicons';
import css from '../AnalysisBlock/AnalysisBlock.module.css';
import { selectAllVisits } from '../../redux/visits/selectors';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const wrapp = {
    marginBottom: '16px',
    boxShadow: 'none',
    borderRadius: '16px',
    padding: { xs: '16px', md: '32px' },
    background: '#FAFAFA',
    '&:first-of-type': {
        borderRadius: '16px',
    },
    '&:last-of-type': {
        borderRadius: '16px',
    },
    '&:before ': {
        content: 'none',
    },
};

const summaryStyles = {
    padding: '0px',
    minHeight: '0px',
    display: 'flex',
    justifyContent: { md: 'space-between' },
    alignItems: { xs: 'flex-start', md: 'center' },
    '& .MuiAccordionSummary-content': {
        margin: '0px',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': { margin: '0px' },
};

const detailsStyles = {
    padding: '0px',
    marginTop: '32px',
};

const AnalysisBlock = () => {
    const [expandedPanel, setExpandedPanel] = useState(null);
    const visits = useSelector(selectAllVisits);
    const allVisits = [...visits].reverse();

    const handleChange = panel => (event, isExpanded) => {
        setExpandedPanel(isExpanded ? panel : null);
    };
    return (
        <>
            <div>
                {allVisits &&
                    allVisits.map(
                        ({
                            doctor,
                            createdAt,
                            medicalHistory,
                            objectiveCondition,
                            recomendation,
                            clinicalDiagnosis,
                            bodyCondition,
                            complaints,
                            associatedDiseases,
                            files,
                            _id,
                        }) => {
                            const medcart = [
                                {
                                    title: 'Complaints at the time of inspection:',
                                    textList: [complaints],
                                },
                                {
                                    title: 'Medical history:',
                                    textList: [medicalHistory],
                                },
                                {
                                    title: 'Objective condition at the time of inspection:',
                                    textList: [objectiveCondition],
                                },
                                {
                                    title: 'Associated diseases:',
                                    textList: [associatedDiseases],
                                },
                                {
                                    title: 'Assessment of body condition:',
                                    textList: [bodyCondition],
                                },
                                {
                                    title: 'Clinical diagnosis:',
                                    textList: [clinicalDiagnosis],
                                },
                                {
                                    title: 'Treatment recommendations:',
                                    textList: [recomendation],
                                },
                            ];

                            return (
                                <Accordion
                                    expanded={expandedPanel === createdAt}
                                    onChange={handleChange(createdAt)}
                                    key={createdAt}
                                    sx={wrapp}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={createdAt}
                                        id={createdAt}
                                        sx={summaryStyles}
                                    >
                                        <Typography
                                            variant="subtitle"
                                            color="text.black"
                                            component="p"
                                            sx={{
                                                fontSize: { md: '20px' },
                                                lineHeight: { md: 1.5 },
                                                marginBottom: { xs: '8px', md: '0px' },
                                            }}
                                        >
                                            {doctor.specialization}
                                        </Typography>

                                        <div className={css.analysis_item}>
                                            <p className={css.doctor_name}>{doctor.name}</p>
                                            <p className={css.doctor_specialization}>{doctor.specialization}</p>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails sx={detailsStyles}>
                                        <ul>
                                            {medcart.map(({ title, textList }) => {
                                                return (
                                                    <li className={css.inside_item} key={Math.random()}>
                                                        <Typography
                                                            component="p"
                                                            variant="subtitle"
                                                            color="text.black"
                                                            sx={{
                                                                fontSize: { md: '20px' },
                                                                lineHeight: { md: 1.5 },
                                                                marginBottom: '16px',
                                                            }}
                                                        >
                                                            {title}
                                                        </Typography>
                                                        <ul className={css.inside_itemNested}>
                                                            {textList.map(text => {
                                                                return (
                                                                    <li key={Math.random()}>
                                                                        <div className={css.dot}>
                                                                            <FiberManualRecordIcon
                                                                                sx={{
                                                                                    width: '8px',
                                                                                    height: '8px',
                                                                                    color: '#477577',
                                                                                    position: 'absolute',
                                                                                    top: '50%',
                                                                                    left: '50%',
                                                                                    transform: 'translate(-50%, -50%)',
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <Typography
                                                                            component="p"
                                                                            variant="text"
                                                                            color="text.gray"
                                                                            sx={{
                                                                                fontSize: { md: '16px' },
                                                                                lineHeight: { md: 1.5 },
                                                                            }}
                                                                        >
                                                                            {text}
                                                                        </Typography>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </li>
                                                );
                                            })}
                                            <li className={css.inside_item}>
                                                <Typography
                                                    component="p"
                                                    variant="subtitle"
                                                    color="text.black"
                                                    sx={{
                                                        fontSize: { md: '20px' },
                                                        lineHeight: { md: 1.5 },
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    Documents:
                                                </Typography>
                                                <ul>
                                                    {files.map(file => {
                                                        return (
                                                            <li key={Math.random()}>
                                                                <Icon color="primary" sx={{ marginRight: '4px' }}>
                                                                    <UilFileAlt
                                                                        style={{
                                                                            width: '20px',
                                                                            height: '20px',
                                                                        }}
                                                                    />
                                                                </Icon>
                                                                <a href={file.fileURL} download className={css.links}>
                                                                    {file.fileName}
                                                                </a>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        }
                    )}
            </div>
        </>
    );
};

export default AnalysisBlock;
