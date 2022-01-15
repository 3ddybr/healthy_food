import React from 'react';

import styles from './styles.module.scss';

import joinImg from '../../assets/bloco_final_image.svg';
import { Button } from '../Button';

export function Join() {
  return (
    <>
      <div id="join" className={styles.joinContainer}>
        <div className={styles.joinContent}>
          <h1>Join our membership to get special offer</h1>
          <div>
            <input type="text" placeholder="Enter your email address" />
            <Button text="Join" />
          </div>
        </div>
        <div className={styles.joinImg}>
          <img src={joinImg} alt="Join" />
        </div>
      </div>
    </>
  );
}
