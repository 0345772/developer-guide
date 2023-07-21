import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Toolbar.module.scss';

interface ToolbarProps {
  className?: string;
}

export const Toolbar = memo((props: ToolbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Toolbar, {}, [className])}>
      <p>{t('тулбар')}</p>
    </div>
  );
});
