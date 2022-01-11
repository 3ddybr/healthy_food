import React from 'react';

interface ReadBlogCardProps {
  title: string;
  namePerfil: string;
  srcImage: string;
  srcImagePerfil: string;
}

import styles from './styles.module.scss';

export function ReadBlogCard({
  title,
  srcImage,
  srcImagePerfil,
  namePerfil,
}: ReadBlogCardProps) {
  return (
    <div className={styles.readBlogCardContainer}>
      <img src={srcImage} />
      <div className={styles.readBlogCardContent}>
        <h2>{title}</h2>
        <div className={styles.readBlogCardPerfil}>
          <img src={srcImagePerfil} />
          <p>{namePerfil}</p>
        </div>
      </div>
    </div>
  );
}
