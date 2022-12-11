import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t, i18n } = useTranslation('main');
    return (
<<<<<<< HEAD
        <div>
=======
        <div className="test">
>>>>>>> main
            <h1>{t('Главная страница')}</h1>
        </div>
    );
};

export default MainPage;
