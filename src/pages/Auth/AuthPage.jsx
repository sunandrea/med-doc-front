import { LoginForm } from 'components/Login/LoginForm';
import { RegisterForm } from 'components/Register/RegisterForm';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Medic from '../../images/Medic.png';
import css from './AuthPage.module.css';

export const AuthPage = () => {
    const { typeAuth } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(typeAuth);

    const handleTabChange = tab => {
        setActiveTab(tab);
        navigate(`/auth/${tab}`, { replace: true });
    };
    return (
        <section className={css.section}>
            <div className={css.mainWraper}>
                <div className={css.wrap}>
                    <p className={css.title}>Monitor your health with the help of the MedDoc office</p>
                    <img src={Medic} alt="medic" className={css.photo} />
                </div>
                <div>
                    <ul className={css.authBtnList}>
                        <li>
                            <button className={css.authBtn} onClick={() => handleTabChange('register')}>
                                registration
                            </button>
                        </li>
                        <li>
                            <button className={css.authBtn} onClick={() => handleTabChange('login')}>
                                log in
                            </button>
                        </li>
                    </ul>
                    {activeTab === 'login' && <LoginForm />}
                    {activeTab === 'register' && <RegisterForm />}
                </div>
            </div>
        </section>
    );
};
