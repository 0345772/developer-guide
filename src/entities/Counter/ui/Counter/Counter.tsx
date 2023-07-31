import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useCounterActions } from '../../model/slice/counterSlice';
import { useCounterValue } from '../../model/selectors/getCounterValue/getCounterValue';
import { Button } from '@/shared/ui/deprecated/Button';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useCounterValue();
  const { t } = useTranslation();
  const { decrement, increment, add } = useCounterActions();

  const handleInc = () => {
    increment();
  };

  const handleDec = () => {
    decrement();
  };

  const handleAddFive = () => {
    add(5);
  };

  return (
    <div style={{ margin: '50px' }}>
      <h3 style={{ textAlign: 'center' }} data-testid="value-title">
        {t('Значение')}:
        <span
          style={{
            fontSize: '45px',
            color: 'red',
            padding: '2px 5px',
            marginLeft: '10px',
          }}
        >
          {counterValue}
        </span>
      </h3>
      <Button data-testid="decrement-btn" onClick={handleDec}>
        {t('отнять')}
      </Button>
      <Button onClick={handleInc} data-testid="increment-btn">
        {t('прибавить')}
      </Button>
      <Button onClick={handleAddFive}>{t('прибавить 5')}</Button>
    </div>
  );
};
