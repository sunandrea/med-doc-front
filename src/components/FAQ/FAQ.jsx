import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState } from 'react';
import css from './FAQ.module.css';

const CustomExpandIcon = () => {
    const iconStyles = {
        color: '#111111',
        width: { xs: '13px', md: '17px' },
        height: { xs: '13px', md: '17px' },
    };
    return (
        <Box
            sx={{
                '.collapsIconWrapper': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50px',
                    border: '0.827586px solid rgba(25, 41, 36, 0.12)',
                    padding: { xs: '9px', md: '11px' },
                },
                '.Mui-expanded & > .collapsIconWrapper': {
                    display: 'none',
                },
                '.expandIconWrapper': {
                    display: 'none',
                },
                '.Mui-expanded & > .expandIconWrapper': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50px',
                    background: '#EDF5F5',
                    padding: { xs: '9.5px', md: '11.5px' },
                },
            }}
        >
            <div className="expandIconWrapper">
                <CloseIcon sx={iconStyles} />
            </div>
            <div className="collapsIconWrapper">
                <AddIcon sx={iconStyles} />
            </div>
        </Box>
    );
};

const QuestionWrapp = {
    marginBottom: '16px',
    border: '1px solid rgba(17, 17, 17, 0.1)',
    boxShadow: 'none',
    borderRadius: '16px',
    padding: { xs: '16px', md: '16px 16px 16px 32px' },
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

const SummaryStyles = {
    padding: '0px',
    '&.Mui-expanded': {
        minHeight: '48px',
    },
    '& .MuiAccordionSummary-content': {
        margin: '0px',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': { margin: '0px' },
};

export const FAQ = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="faq section">
            <h2 className={css.sectionTitle}>FAQ</h2>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={QuestionWrapp}>
                <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={SummaryStyles}
                >
                    <h3 className={css.questionsTitle}>What to do if bleeding starts: first aid</h3>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px' }}>
                    <div className={css.questionsList}>
                        <p className={css.questionsItems}>
                            If you or someone else experiences bleeding, it's important to take immediate action to stop
                            the bleeding and prevent further injury. Here are the steps you should follow:
                        </p>
                        <ul>
                            <li className={css.questionsItems}>
                                Apply pressure: Use a clean cloth or gauze pad to apply firm, steady pressure to the
                                wound. Hold the pressure for at least 5-10 minutes, or until the bleeding stops.
                            </li>
                            <li className={css.questionsItems}>
                                Elevate the affected area: If possible, elevate the injured area above the heart to help
                                reduce blood flow to the wound.
                            </li>
                            <li className={css.questionsItems}>
                                Clean the wound: Once the bleeding has stopped, clean the wound with soap and water. Use
                                a sterile bandage or adhesive strip to cover the wound and protect it from further
                                injury.
                            </li>
                            <li className={css.questionsItems}>
                                Seek medical attention: If the bleeding is severe or doesn't stop after several minutes
                                of applying pressure, seek medical attention immediately. You may need stitches or other
                                medical treatment to properly address the injury.
                            </li>
                            <li className={css.questionsItems}>
                                Remember, it's important to stay calm and focused in the event of a bleeding injury. By
                                taking quick and appropriate action, you can help to minimize the risk of further injury
                                and promote faster healing.
                            </li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={QuestionWrapp}>
                <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    sx={SummaryStyles}
                >
                    <h3 className={css.questionsTitle}>How and when to register for pregnancy</h3>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px' }}>
                    <ul className={css.questionsList}>
                        <li className={css.questionsItems}>
                            Contact your treating physician. After the check-up, the doctor will put you on record.
                        </li>
                        <li className={css.questionsItems}>
                            If you don't have a treating doctor, you can make an appointment for a medical check-up with
                            any doctor. After the check-up, you will be asked to sign a treatment agreement with this
                            doctor, after which you will be put on record for pregnancy.
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={QuestionWrapp}>
                <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={SummaryStyles}
                >
                    <h3 className={css.questionsTitle}>How to choose your doctor</h3>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px' }}>
                    <ul className={css.questionsList}>
                        <li className={css.questionsItems}>
                            In order to choose the most suitable doctor for you, after registration, go to the doctor's
                            tab and read the ratings and reviews of our doctors. Also on this tab, you can find all the
                            information you are interested in.
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={QuestionWrapp}>
                <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    sx={SummaryStyles}
                >
                    <h3 className={css.questionsTitle}>Can I get a prescription online</h3>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px', marginBottom: '16px' }}>
                    <ul className={css.questionsList}>
                        <li className={css.questionsItems}>
                            Unfortunately, you can get a prescription only after a check-up by a doctor.
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
