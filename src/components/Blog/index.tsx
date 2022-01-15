import React from 'react';

import styles from './styles.module.scss';

import servicesImg from '../../assets/bloco_services.svg';
import { Button } from '../Button';

export function Blog() {
  return (
    <>
      <div className={styles.blogContainer}>
        <div className={styles.blogImg}>
          <img src={servicesImg} alt="Blog Services" />
        </div>

        <div className={styles.blogContent}>
          <h2>The best services ready To serve you</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <Button text="Know More" />
        </div>
      </div>
    </>
  );
}
