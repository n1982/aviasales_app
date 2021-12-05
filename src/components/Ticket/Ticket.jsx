import React from 'react';

import S7logo from '../../assets/img/S7 Logo.png';

import './Ticket.scss';

const Ticket = () => (
  <div className="ticket">
    <div className="ticket__price-logo">
      <div className="ticket__price"> 14 300 руб</div>
      <img className="header__logo" alt="logo" src={S7logo} />
    </div>
    <div className="ticket__information">
      <div className="ticket__text gray-text">MOW-HKT</div>
      <div className="ticket__text gray-text">В пути</div>
      <div className="ticket__text gray-text">2 пересадки</div>
      <div className="ticket__text"> 10:45-08:00</div>
      <div className="ticket__text"> 21ч 15м</div>
      <div className="ticket__text"> HKG, JNB</div>
    </div>
    <div className="ticket__information">
      <div className="ticket__text gray-text">MOW-HKT</div>
      <div className="ticket__text gray-text">В пути</div>
      <div className="ticket__text gray-text">2 пересадки</div>
      <div className="ticket__text"> 10:45-08:00</div>
      <div className="ticket__text"> 21ч 15м</div>
      <div className="ticket__text"> HKG, JNB</div>
    </div>
  </div>
);

export default Ticket;
