import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';
<<<<<<< HEAD
=======
import cls from './LangSwitcher.module.scss';
>>>>>>> main

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
<<<<<<< HEAD
            className={classNames('', {}, [className])}
=======
            className={classNames(cls.LangSwitcher, {}, [className])}
>>>>>>> main
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};
