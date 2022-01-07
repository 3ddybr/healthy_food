import React from 'react';
import { Button } from '../Button';

import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Healthy Food</h1>
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
          <Button text="REGISTER" />
        </div>
      </div>
    </div>
  );
}
