/* eslint-disable arrow-body-style */
import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';

import './App.scss';

const App = () => {
  // useEffect(() => {
  //   const getTickets = new GetTicketFromServer();
  //   getTickets.getSearchId().then((item) => item.searchId);
  //
  //   // const body = getTickets.getTickets(searchId);
  //   // console.log(body);
  // }, []);
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
