import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t, i18n } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(value);
    };
    return (
        <div>
            <h1>{t('Главная страница')}</h1>
        </div>
    );
};

export default MainPage;
