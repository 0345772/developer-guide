import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t, i18n } = useTranslation('about');
    return (
<<<<<<< HEAD
        <div>
=======
        <div className="test">
>>>>>>> main
            <h1>{t('О сайте')}</h1>
        </div>
    );
}
export default AboutPage;
