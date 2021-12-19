import React from 'react';
import { useSelector } from 'react-redux';

import TicketList from '../TicketList';
import SortingTab from '../SortingTab';
import Spinner from '../Spinner';

import styles from './Main.module.scss';

const Main = () => {
  const isLoading = useSelector((state) => state.tickets.isLoading);
  return (
    <div className={styles.main}>
      <SortingTab />
      {isLoading && <Spinner />}
      <TicketList />
    </div>
  );
};

export default Main;
