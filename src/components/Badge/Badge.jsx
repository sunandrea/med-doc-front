import { Typography } from '@mui/material';
import style from './Badge.module.css';

export const Badge = ({ children }) => {
    return (
        <div className={style.Badge}>
            <Typography variant="badgeText" color="text.black" component="span">
                {children}
            </Typography>
        </div>
    );
};
