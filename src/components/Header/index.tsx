import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/">
          <h1>Healthy Food</h1>
        </Link>
        {/* <div className={styles.mobileMenu}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div> */}
        <div className={styles.navList}>
          <nav>
            <ul>
              <li>
                <a href="#recipes">HEALTHY RECIPES</a>
              </li>
              <li>
                <a href="#readblog">BLOG</a>
              </li>
              <li>
                <a href="#join">JOIN</a>
              </li>
            </ul>
            <Link to="/register">
              <Button text="REGISTER" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
