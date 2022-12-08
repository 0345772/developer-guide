import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const {t, i18n} = useTranslation('main')
  return(
    <div className='test'>
    <h1>{t('Главная страница')}</h1>
  </div>
  )
}


export default MainPage;