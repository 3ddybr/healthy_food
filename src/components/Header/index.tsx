import React from 'react';
import { Link } from 'react-router-dom';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <Link to="/">
          <h1>Healthy Food</h1>
        </Link>
        <div className={styles.navList}>
          <MobileNavigation />
          <Navigation />
        </div>
      </div>
    </div>
  );
}
