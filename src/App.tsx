import React from 'react';
import { Header } from './components/Header';

import styles from './home.module.scss';

import homeImg from './assets/Illustration.svg';
import searchImg from './assets/search.svg';
import { Recipes } from './components/Recipes';
import { Blog } from './components/Blog';
import { ReadBlog } from './components/ReadBlog';
import { Join } from './components/Join/index.tsx';

export function App() {
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
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
