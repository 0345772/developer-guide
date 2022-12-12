import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={classNames(cls.Loader, {}, [className])}>
            {t('лоадер')}
        </div>
    );
};

export default Loader;
