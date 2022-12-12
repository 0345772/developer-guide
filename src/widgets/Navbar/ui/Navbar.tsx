import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    const about = '/about';
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink to={about} className={cls.aboutLink}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};

function useTheme(): { theme: any; toggleTheme: any } {
    throw new Error('Function not implemented.');
}
