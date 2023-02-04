import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = memo(() => {
    const { t, i18n } = useTranslation('about');
    return (
        <Page>
            <h1>{t('О сайте')}</h1>
        </Page>
    );
});
export default AboutPage;
