import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, InputLabel, Modal, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/info/operation';
import * as yup from 'yup';
import s from './ModalEditPatientProfile.module.css';

const regex = /^\+\d{1,3}\s?s?\d{1,}\s?\d{1,}\s?\d{1,}$/;

const schema = yup.object().shape({
    username: yup
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(200, 'Name must be less than or equal to 200 characters')
        .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
        .required('Name is a required field'),
    phone: yup.string().matches(regex, 'Phone number is not valid').required('Phone is a required field'),
    gender: yup.string().min(4).max(6).required(),
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: [335, 335, 500],
    p: 4,
    background: '#FFFFFF',
    boxShadow: '0px 4px 23px rgba(17, 17, 17, 0.05)',
    borderRadius: '16px',
};

const ModalEditPatientProfile = ({ open, setApp, userInfo }) => {
    const [selectedDate, setSelectedDate] = useState(dayjs);
    const dispatch = useDispatch();

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    const handleSubmitForm = values => {
        const data = {
            name: values.username,
            gender: values.gender,
            birthday: selectedDate.format('MM.DD.YYYY'),
            number: values.phone,
        };
        dispatch(updateUserInfo(data));
        setApp(!open);
    };

    const formik = useFormik({
        initialValues: {
            username: userInfo.name,
            gender: userInfo.gender || '',
            date: userInfo.birthday || selectedDate,
            phone: userInfo.number,
        },
        validationSchema: schema,
        onSubmit: values => {
            handleSubmitForm(values);
        },
    });

    return (
        <Modal open={open} onClose={() => setApp(!open)}>
            <Box sx={style} className={s.box_style}>
                <div className={s.header_wrapper}>
                    <Typography variant="subtitle" component="p">
                        Edit profile
                    </Typography>
                    <IconButton onClick={() => setApp(!open)} size="small">
                        <CloseIcon sx={{ width: '24px', height: '24px', color: 'text.black' }} />
                    </IconButton>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <ul className={s.input_wrapper}>
                        <li>
                            <InputLabel variant="standard" color="primary" htmlFor="username">
                                Name
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="username"
                                name="username"
                                type="text"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}
                            />
                        </li>
                        <li>
                            <InputLabel variant="standard" color="primary" htmlFor="gender">
                                Gender
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="gender"
                                name="gender"
                                type="text"
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                error={formik.touched.gender && Boolean(formik.errors.gender)}
                                helperText={formik.touched.gender && formik.errors.gender}
                            />
                        </li>
                        <li>
                            <InputLabel variant="standard" color="primary" htmlFor="date">
                                Date of birth
                            </InputLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoItem id="date" name="date" components={['DatePicker']}>
                                    <DatePicker
                                        sx={{ width: '100%' }}
                                        value={selectedDate}
                                        onChange={value => {
                                            formik.setFieldValue(handleDateChange(value));
                                        }}
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                        </li>
                        <li>
                            <InputLabel variant="standard" color="primary" htmlFor="phone">
                                Number
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />
                        </li>
                    </ul>
                    <Button
                        disableElevation
                        type="submit"
                        variant="contained"
                        color="secondary"
                        sx={{ p: { md: '13px 32px' } }}
                    >
                        Save
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ModalEditPatientProfile;
