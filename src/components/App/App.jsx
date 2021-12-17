/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';

import { fetchSearchId, fetchTickets } from '../../store/ticketsSlice';
import './App.scss';
import deleteCookie from '../../utilites/deleteCokie';

const App = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const fetchStatus500 = useSelector((state) => state.tickets.fetchStatus500);
  const stopFetch = useSelector((state) => state.tickets.stopFetch);
  const searchId = useSelector((state) => state.tickets.searchId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchId());
    return deleteCookie('searchId');
  }, [dispatch]);
  useEffect(() => {
    if (!stopFetch && searchId) dispatch(fetchTickets());
  }, [dispatch, tickets, fetchStatus500, stopFetch, searchId]);

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
