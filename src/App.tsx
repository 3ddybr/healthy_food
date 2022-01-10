import React from 'react';
import { Header } from './components/Header';

import styles from './home.module.scss';

import homeImg from './assets/Illustration.svg';
import searchImg from './assets/search.svg';
import { Recipes } from './components/Recipes';

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
    </>
  );
}
