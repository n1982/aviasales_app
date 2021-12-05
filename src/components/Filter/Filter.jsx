import React from 'react';

import './Filter.scss';

const Filter = () => (
  <div className="sidebar">
    <div className="filter-transfer">
      <div className="filter-transfer__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className="checkbox">
        <input type="checkbox" name="direct flight" />
        <label htmlFor="direct flight">Без пересадок</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" name="direct flight" />
        <label htmlFor="direct flight">1 пересадка</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" name="direct flight" />
        <label htmlFor="direct flight">2 пересадки</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" name="direct flight" />
        <label htmlFor="direct flight">3 пересадки</label>
      </div>
    </div>
  </div>
);
export default Filter;
