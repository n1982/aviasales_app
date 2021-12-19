import React from 'react';

import TicketList from '../TicketList';
import SortingTab from '../SortingTab';

import styles from './Main.module.scss';

const Main = () => (
  <div className={styles.main}>
    <SortingTab />
    <TicketList />
  </div>
);

export default Main;
