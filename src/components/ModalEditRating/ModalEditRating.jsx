import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ControlledRating } from '../ControlledRating/ControlledRating';
import { DoctorInfoCard } from '../DoctorInfoCard/DoctorInfoCard';
import css from './ModalEditRating.module.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#FFFFFF',
    boxShadow: '0px 4px 23px rgba(17, 17, 17, 0.05)',
    borderRadius: '16px',
    p: 4,
    outline: 'none',
};

export const ModalEditRating = ({ plug, isOpen, onClose, doctorData }) => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));

    const mobileStyle = {
        padding: '40px 20px',
    };

    const iconButtonStyle = {
        position: 'absolute',
        ...(mobile ? { top: 20, right: 20 } : { top: 32, right: 32 }),
        padding: '0px',
    };

    const iconStyle = {
        ...(mobile ? { width: '18px', height: '18px' } : { width: '24px', height: '24px' }),
        fill: 'black',
    };

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, ...(mobile ? mobileStyle : { padding: '32px' }) }}>
                    <DoctorInfoCard doctorData={doctorData} plug={plug} />
                    <IconButton aria-label="close modal" onClick={onClose} sx={iconButtonStyle}>
                        <CloseIcon sx={iconStyle} />
                    </IconButton>
                    <p className={css.ratingTitle}>Rating</p>
                    <ControlledRating onSubmit={onClose} doctor={doctorData.id} />
                    <div className={css.ratingText}>
                        <p>
                            We understand how important the rating of doctors or clinics is for our users and how it
                            affects their choice.
                        </p>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};
