import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
    const { t, i18n } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(value);
    };
    return (
        <Page>
            <h1>{t('Главная страница')}</h1>
        </Page>
    );
});

export default MainPage;
