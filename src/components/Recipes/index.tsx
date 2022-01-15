import React from 'react';
import { RecipesCard } from '../RecipesCard';

import styles from './styles.module.scss';
import comidaImg1 from '../../assets/comida_1.svg';
import comidaImg2 from '../../assets/comida_2.svg';
import comidaImg3 from '../../assets/comida_3.svg';
import comidaImg4 from '../../assets/comida_4.svg';

export function Recipes() {
  return (
    <div id="recipes" className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>Our Best Recipes</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className={styles.content}>
        <RecipesCard title="Broccoli Salad with Bacon" srcImage={comidaImg1} />
        <RecipesCard title="Classic Beef Burgers" srcImage={comidaImg2} />
        <RecipesCard title="Classic Potato Salad" srcImage={comidaImg3} />
        <RecipesCard
          title="Cherry Cobbler on the Grill"
          srcImage={comidaImg4}
        />
      </div>
    </div>
  );
}
