import { Paper } from '@mui/material';

const Card = ({ children, styles }) => {
    const style = {
        position: 'relative',
        borderRadius: '16px',
        p: { xs: '16px ' },
        bgcolor: 'background.card',
        width: '100%',
    };
    return (
        <Paper sx={style} elevation={0}>
            {children}
        </Paper>
    );
};

export default Card;
