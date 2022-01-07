import React from 'react';

import styles from './styles.module.scss';

export function Recipes() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>Our Best Recipes</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className={styles.content}></div>
    </div>
  );
}
