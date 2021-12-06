/* eslint-disable react/prop-types,spaced-comment */
import React from 'react';
import enumeration from '../../utilites/enumeration';
import { getArrivalTime, getDepartureTime, getTravelTime } from '../../utilites/dateUtility';

import S7logo from '../../assets/img/S7 Logo.png';
import './Ticket.scss';

const Ticket = ({ price, carrier, segments }) => {
  console.log(carrier);
  console.log(price);
  console.log(segments);
  return (
    <div className="ticket">
      <div className="ticket__price-logo">
        <div className="ticket__price"> {`${price} \u20bd`} </div>
        <img className="header__logo" alt="logo" src={S7logo} />
      </div>
      {segments.map((item) => (
        <div className="ticket__information" key={item.date}>
          <div className="ticket__text gray-text">
            {item.origin}-{item.destination}
          </div>
          <div className="ticket__text gray-text">В пути</div>
          <div className="ticket__text gray-text">
            {item.stops.length} {enumeration(item.stops.length)}
          </div>
          <div className="ticket__text">
            {getDepartureTime(item.date)} - {getArrivalTime(item.date, item.duration)}
          </div>
          <div className="ticket__text"> {getTravelTime(item.duration)}</div>
          <div className="ticket__text"> {item.stops.join(' ')}</div>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
