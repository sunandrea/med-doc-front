import { Typography } from '@mui/material';
import s from '../InformationBlock/InformationBlock.module.css';

const InformationBlock = ({ name, imageUrl, defaultHero }) => {
    return (
        // <div className={s.info_wrapper}>
        <div className={s.info_bgr}>
            <div className={s.text_wrapper}>
                <Typography
                    variant="h1"
                    color="text.white"
                    sx={{ fontSize: { md: '48px', lg: '60px' }, lineHeight: { md: 1.14, lg: 1.17 } }}
                    // className={s.info_header}
                >
                    {name || defaultHero.name}
                </Typography>
                {defaultHero && (
                    <Typography
                        variant="text"
                        color="text.white"
                        component="p"
                        sx={{ fontSize: { md: '16px', lg: '18px' }, lineHeight: { md: 1.75, lg: 1.67 } }}
                        // className={s.info_text}
                    >
                        {defaultHero.text}
                    </Typography>
                )}
            </div>
            <div className={s.info_img}>
                <img src={imageUrl || defaultHero.imageUrl} alt="dna" />
            </div>
        </div>
        // </div>
    );
};
export default InformationBlock;
