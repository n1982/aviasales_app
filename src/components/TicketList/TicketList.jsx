import React from 'react';
import { useSelector } from 'react-redux';

import Ticket from '../Ticket';

import uniqueKey from '../../utilites/uniqueKey';
import './TicketList.scss';

const TicketList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <Ticket key={uniqueKey()} {...ticket} />
      ))}
      <button type="button" className="ticket-list__button">
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  );
};

export default TicketList;
