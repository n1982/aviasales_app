import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showMoreTicket } from '../../store/ticketsSlice';

import Ticket from '../Ticket';
import filterTicketByTransfer from '../../utilites/filterTicketByTransfer';
import uniqueKey from '../../utilites/uniqueKey';

import './TicketList.scss';

const TicketList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const numShowTicket = useSelector((state) => state.tickets.numShowTicket);
  const showAllTickets = useSelector((state) => state.tickets.showAllTickets);
  const valueFilterTransfer = useSelector((state) => state.tickets.valueFilterTransfer);
  const dispatch = useDispatch();

  return (
    <div className="ticket-list">
      {tickets
        .filter((item) => filterTicketByTransfer(item, showAllTickets, valueFilterTransfer))
        .slice(0, numShowTicket)
        .map((ticket) => (
          <Ticket key={uniqueKey()} {...ticket} />
        ))}
      <button type="button" className="ticket-list__button" onClick={() => dispatch(showMoreTicket())}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  );
};

export default TicketList;
