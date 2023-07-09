import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { Text, TextSize, TextVariant } from '../Text';
import { HStack } from '../Stack';

interface AppLogoProps {
  className?: string;
  size: number;
  title: string;
  text: string;
  textSize?: TextSize;
  variant?: TextVariant;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size = 100, title, text, textSize, variant } = props;
  const { t } = useTranslation();

  return (
    <>
      <HStack
        max
        justify="center"
        className={classNames(cls.appLogoWrapper, {}, [])}
      >
        <AppSvg
          width={size}
          height={size}
          color="black"
          className={cls.appLogo}
        />
        <div className={cls.gradientBig} />
        <div className={cls.gradientSmall} />
      </HStack>
      <Text
        className={cls.appLogoText}
        align="center"
        size={textSize}
        variant={variant}
        text={t(text)}
        title={t(title)}
      />
    </>
  );
});
