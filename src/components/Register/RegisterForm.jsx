import {
    Button,
    FormControl,
    FormControlLabel,
    InputAdornment,
    InputLabel,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';
import ShowPassword from 'components/ShowPassword/ShowPassword';
import { useFormik } from 'formik';
// import { useAuth } from 'hooks';
import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/operation';
import * as yup from 'yup';
import css from '..//Register/Register.module.css';
const regex = /^\+\d{1,3}\s?s?\d{1,}\s?\d{1,}\s?\d{1,}$/;
const passwordRules = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const schema = yup.object().shape({
    username: yup
        .string()
        .min(3, 'Username must be at least 3 characters')
        .max(200, 'Username must be less than or equal to 200 characters')
        .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
        .required('Username is a required field'),
    phone: yup.string().matches(regex, 'Phone number is not valid').required('Phone is a required field'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .matches(
            passwordRules,
            'Password must contain at least 8 characters, 1 uppercase, 1 number and 1 special case character'
        )
        .required('Password is a required field'),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const { user } = useAuth();

    const handleSubmitForm = values => {
        const newUser = {
            name: values.username,
            number: values.phone,
            password: values.password,
            role: values.role,
        };
        const res = dispatch(register(newUser));
        res.then(el => {
            if (typeof el.payload === 'number') {
                if (el.payload === 400) {
                    NotificationManager.warning('Заповніть всі поля реєстрації');
                } else if (el.payload === 409) {
                    NotificationManager.error('Цей номер телефону вже зареєстрований');
                }
            } else {
                NotificationManager.success('Реєстрація успішна');

                formik.resetForm();
                // navigate('/auth/login', { replace: true });
                // values.role === 'Doctor'
                //     ? navigate(`/doctor/personal/${user.id}`, { replace: true })
                //     : navigate('/patient/personal/', { replace: true });
            }
        });
    };
    const [showPassword, setShow] = useState(false);
    const handleClick = () => {
        setShow(show => !show);
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            phone: '',
            password: '',
            role: 'Patient',
        },
        validationSchema: schema,
        onSubmit: values => {
            handleSubmitForm(values);
        },
    });

    return (
        <div className={css.wrap}>
            <form onSubmit={formik.handleSubmit}>
                <ul className={css.formWraper}>
                    <li className={css.formItem}>
                        <InputLabel htmlFor="username" variant="standard" color="primary">
                            Name
                        </InputLabel>
                        <TextField
                            fullWidth
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Enter your name"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                        />
                    </li>
                    <li className={css.formItem}>
                        <InputLabel htmlFor="phone" variant="standard" color="primary">
                            Phone Number
                        </InputLabel>
                        <TextField
                            fullWidth
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+380"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />
                    </li>
                    <li className={css.formItem}>
                        <InputLabel htmlFor="password" variant="standard" color="primary">
                            Password
                        </InputLabel>
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            type={showPassword ? 'true' : 'password'}
                            placeholder="Enter your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <ShowPassword isShown={showPassword} handleClick={handleClick} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </li>
                    <li className={css.formItem}>
                        {/* RADIO */}
                        <FormControl>
                            <RadioGroup row name="role" defaultValue="Patient" onChange={formik.handleChange}>
                                <FormControlLabel value="Patient" control={<Radio />} label="Patient" />
                                <FormControlLabel value="Doctor" control={<Radio />} label="Doctor" />
                            </RadioGroup>
                        </FormControl>
                    </li>
                </ul>
                {formik.values.username && formik.values.phone && formik.values.password === '' ? (
                    <Button disabled variant="contained" color="secondary" disableElevation type="submit">
                        Registration
                    </Button>
                ) : (
                    <Button variant="contained" color="secondary" disableElevation type="submit">
                        Registration
                    </Button>
                )}
            </form>
            <NotificationContainer />
        </div>
    );
};
