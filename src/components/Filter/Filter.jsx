import React from 'react';

import styles from './Filter.module.scss';

const Filter = () => (
  <div className={styles.filter}>
    <div className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>

    <input type="checkbox" id="all" className={styles.checkbox} />
    <label className={styles.label} htmlFor="all">
      Все
    </label>

    <input type="checkbox" id="0 direct" className={styles.checkbox} />
    <label className={styles.label} htmlFor="0 direct">
      Без пересадок
    </label>

    <input type="checkbox" id="1 direct" className={styles.checkbox} />
    <label className={styles.label} htmlFor="1 direct">
      1 пересадка
    </label>

    <input type="checkbox" id="2 direct" className={styles.checkbox} />
    <label className={styles.label} htmlFor="2 direct">
      2 пересадки
    </label>

    <input type="checkbox" id="3 direct" className={styles.checkbox} />
    <label className={styles.label} htmlFor="3 direct">
      3 пересадки
    </label>
  </div>
);
export default Filter;
