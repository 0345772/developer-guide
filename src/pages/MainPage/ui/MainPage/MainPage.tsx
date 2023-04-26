/* eslint-disable i18next/no-literal-string */
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';
import { Counter } from '@/entities/Counter';

const MainPage = memo(() => {
    const { t, i18n } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(value);
    };
    return (
        <Page data-testid="MainPage">
            <h1>{t('Главная страница')}</h1>
            <Counter />
            <RatingCard
                title="Как Вам статья?"
                feedbackTitle="Оставьвте отзыв о статье"
                hasFeedback
            />
        </Page>
    );
});

export default MainPage;
