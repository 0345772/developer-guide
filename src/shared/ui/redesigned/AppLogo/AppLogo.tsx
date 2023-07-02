import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { Text, TextAlign, TextSize, TextTheme } from '../../deprecated/Text';
import { HStack } from '../../deprecated/Stack';

interface AppLogoProps {
  className?: string;
  size?: number;
  title: string;
  text: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size = 100, title, text } = props;
  const { t } = useTranslation();

  return (
    <>
      <HStack
        max
        justify="center"
        className={classNames(cls.appLogoWrapper, {}, [])}
      >
        <div className={cls.gradientBig} />
        <div className={cls.gradientSmall} />
        <AppSvg
          width={size}
          height={size}
          color="black"
          className={cls.appLogo}
        />
      </HStack>
      <Text
        align={TextAlign.CENTER}
        size={TextSize.S}
        theme={TextTheme.ERROR}
        text={text}
        title={title}
      />
    </>
  );
});
