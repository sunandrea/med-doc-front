import { Button, Typography } from '@mui/material';
import { RxPencil1 } from 'react-icons/rx';
import style from './PatientMedcart.module.css';

export const PatientMedcart = ({ setEditMedcart, setAddMedcart, medcart }) => {
    return (
        <div className={style.PatientMedcart}>
            {medcart && medcart[0].textList && (
                <>
                    <Button
                        color="primary"
                        sx={{ position: 'absolute', top: '16px', right: '16px', zIndex: 1 }}
                        onClick={() => setEditMedcart(true)}
                    >
                        <RxPencil1 style={{ width: '20px', height: '20px' }} />
                        <Typography color="text.primary" sx={{ lineHeight: 1.285, textTransform: 'none' }}>
                            Edit data
                        </Typography>
                    </Button>
                    <ul>
                        {medcart.map(({ title, textList }, index) => {
                            return (
                                <li key={index} className={style.PatientMedcart_Item}>
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
                                    <div className={style.PatientMedcart_ItemConclusion}>
                                        <div>
                                            <Typography
                                                component="p"
                                                variant="text"
                                                color="text.gray"
                                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                                            >
                                                {textList}
                                            </Typography>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
            {medcart && medcart[0].textList === '' && (
                <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{ fontSize: '22px' }}
                    onClick={() => setAddMedcart(true)}
                >
                    + Add Information
                </Button>
            )}
        </div>
    );
};
