import { Theme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <h4 className="psevdo">
                {t('псевдо')}
            </h4>
        </div>
    );
};
