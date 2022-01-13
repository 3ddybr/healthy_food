import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

// import register from '../Register';

import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/">
          <h1>Healthy Food</h1>
        </Link>
        <div className={styles.navegations}>
          <nav>
            <ul>
              <li>
                <a>HEALTHY RECIPES</a>
              </li>
              <li>
                <a>BLOG</a>
              </li>
              <li>
                <a>JOIN</a>
              </li>
            </ul>
          </nav>
          <Link to="/register">
            <Button text="REGISTER" />
          </Link>
        </div>
      </div>
    </div>
  );
}
