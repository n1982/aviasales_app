import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setValueFilterTicket, switchFilterAll } from '../../store/ticketsSlice';

import styles from './Filter.module.scss';

const Filter = () => {
  const [checkedAllTicket, setCheckedAllTicket] = useState(true);
  const [checkedZero, setCheckedZero] = useState(false);
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [isMount, setIsMount] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isMount) {
      setIsMount(true);
    } else if (checkedZero && checkedOne && checkedTwo && checkedThree) {
      setCheckedAllTicket(true);
    } else {
      setCheckedAllTicket(false);
    }
  }, [isMount, checkedZero, checkedOne, checkedTwo, checkedThree]);

  useEffect(() => {
    dispatch(switchFilterAll(checkedAllTicket));
  }, [dispatch, checkedAllTicket]);

  const handleCheckboxChange = (event) => {
    switch (event.target.name) {
      case 'Zero':
        setCheckedZero(event.target.checked);
        dispatch(setValueFilterTicket({ isChecked: event.target.checked, filterValue: 0 }));
        break;
      case 'One':
        setCheckedOne(event.target.checked);
        dispatch(setValueFilterTicket({ isChecked: event.target.checked, filterValue: 1 }));
        break;
      case 'Two':
        setCheckedTwo(event.target.checked);
        dispatch(setValueFilterTicket({ isChecked: event.target.checked, filterValue: 2 }));
        break;
      case 'Three':
        setCheckedThree(event.target.checked);
        dispatch(setValueFilterTicket({ isChecked: event.target.checked, filterValue: 3 }));
        break;
      default:
        setCheckedAllTicket(event.target.checked);
    }
  };

  return (
    <div className={styles.filter}>
      <div className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="all"
          name="All"
          className={styles.checkbox}
          checked={checkedAllTicket}
          onChange={(event) => handleCheckboxChange(event)}
        />
        <label className={styles.label} htmlFor="all">
          Все
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="Zero_transfer"
          name="Zero"
          className={styles.checkbox}
          checked={checkedZero}
          onChange={(event) => handleCheckboxChange(event)}
        />
        <label className={styles.label} htmlFor="Zero_transfer">
          Без пересадок
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="One_transfer"
          name="One"
          className={styles.checkbox}
          checked={checkedOne}
          onChange={(event) => handleCheckboxChange(event)}
        />
        <label className={styles.label} htmlFor="One_transfer">
          1 пересадка
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="Two_transfer"
          name="Two"
          className={styles.checkbox}
          checked={checkedTwo}
          onChange={(event) => handleCheckboxChange(event)}
        />
        <label className={styles.label} htmlFor="Two_transfer">
          2 пересадки
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="Three_transfer"
          name="Three"
          className={styles.checkbox}
          checked={checkedThree}
          onChange={(event) => handleCheckboxChange(event)}
        />
        <label className={styles.label} htmlFor="Three_transfer">
          3 пересадки
        </label>
      </div>
    </div>
  );
};
export default Filter;
