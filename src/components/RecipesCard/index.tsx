import React from 'react';
import { Button } from '../Button';

interface RecipesCardProps {
  title: string;
  srcImage: string;
}

import styles from './styles.module.scss';

export function RecipesCard({ title, srcImage }: RecipesCardProps) {
  return (
    <div className={styles.recipesCardContainer}>
      <img src={srcImage} />
      <div className={styles.recipesCardContent}>
        <h2>{title}</h2>
        <Button text="See Recipe" />
      </div>
    </div>
  );
}
