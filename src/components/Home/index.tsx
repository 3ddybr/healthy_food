import React from 'react';

import { Recipes } from '../Recipes';
import { Blog } from '../Blog';
import { ReadBlog } from '../ReadBlog';
import { Join } from '../Join/index.tsx';

import searchImg from '../../assets/search.svg';
import homeImg from '../../assets/Illustration.svg';

import styles from './home.module.scss';

export function Home() {
  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.appContent}>
          <h1>Ready for Trying a new recipe?</h1>
          <div>
            <input type="text" placeholder="Search healthy recipes" />
            <button>
              <img src={searchImg} alt="" />
            </button>
          </div>
        </div>
        <div className={styles.appImg}>
          <img src={homeImg} alt="Illustration" />
        </div>
      </div>
      <Recipes />
      <Blog />
      <ReadBlog />
      <Join />
      <footer>
        <div className={styles.footerContainer}>
          <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
}
