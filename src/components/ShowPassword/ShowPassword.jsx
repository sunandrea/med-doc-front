import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import css from '../../components/ShowPassword/ShowPassword.module.css';

const ShowPassword = ({ isShown, handleClick }) => {
    return (
        <button type="button" onClick={() => handleClick()} className={css.eyeBtn}>
            {isShown ? (
                <VisibilityOutlinedIcon sx={{ display: 'block', color: 'rgba(0, 0, 0, 1)' }} />
            ) : (
                <VisibilityOffOutlinedIcon sx={{ display: 'block', color: 'rgba(0, 0, 0, 0.3)' }} />
            )}
        </button>
    );
};

export default ShowPassword;
