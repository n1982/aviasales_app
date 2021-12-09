import React from 'react';
import { useDispatch } from 'react-redux';

import './SortingTab.scss';

import { sortTicketByPrice, sortTicketByDuration, sortTicketOptimal } from '../../store/ticketsSlice';

const SortingTab = () => {
  const dispatch = useDispatch();
  return (
    <div className="tabs-sorting">
      <div role="presentation" className="tabs-sorting__tab" onClick={() => dispatch(sortTicketByPrice())}>
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </div>
      <div role="presentation" className="tabs-sorting__tab" onClick={() => dispatch(sortTicketByDuration())}>
        <span>САМЫЙ БЫСТРЫЙ</span>
      </div>
      <div role="presentation" className="tabs-sorting__tab" onClick={() => dispatch(sortTicketOptimal())}>
        <span>ОПТИМАЛЬНЫЙ</span>
      </div>
    </div>
  );
};

export default SortingTab;
