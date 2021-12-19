import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './SortingTab.module.scss';

import { sortTicketByPrice, sortTicketByDuration, sortTicketOptimal } from '../../store/ticketsSlice';

const SortingTab = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.tabs}>
      <div role="presentation" className={styles.tab} onClick={() => dispatch(sortTicketByPrice())}>
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </div>
      <div role="presentation" className={styles.tab} onClick={() => dispatch(sortTicketByDuration())}>
        <span>САМЫЙ БЫСТРЫЙ</span>
      </div>
      <div role="presentation" className={styles.tab} onClick={() => dispatch(sortTicketOptimal())}>
        <span>ОПТИМАЛЬНЫЙ</span>
      </div>
    </div>
  );
};

export default SortingTab;
