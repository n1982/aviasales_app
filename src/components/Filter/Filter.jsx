import React from 'react';

import styles from './Filter.module.scss';

const Filter = () => (
  <div className={styles.filter}>
    <div className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
    <div className={styles.wrapper}>
      <input type="checkbox" id="all" className={styles.checkbox} />
      <label className={styles.label} htmlFor="all">
        Все
      </label>
    </div>
    <div className={styles.wrapper}>
      <input type="checkbox" id="0 direct" className={styles.checkbox} />
      <label className={styles.label} htmlFor="0 direct">
        Без пересадок
      </label>
    </div>
    <div className={styles.wrapper}>
      <input type="checkbox" id="1 direct" className={styles.checkbox} />
      <label className={styles.label} htmlFor="1 direct">
        1 пересадка
      </label>
    </div>
    <div className={styles.wrapper}>
      <input type="checkbox" id="2 direct" className={styles.checkbox} />
      <label className={styles.label} htmlFor="2 direct">
        2 пересадки
      </label>
    </div>
    <div className={styles.wrapper}>
      <input type="checkbox" id="3 direct" className={styles.checkbox} />
      <label className={styles.label} htmlFor="3 direct">
        3 пересадки
      </label>
    </div>
  </div>
);
export default Filter;
