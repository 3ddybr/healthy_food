import React from 'react';

import styles from './styles.module.scss';
import { ReadBlogCard } from '../ReadBlogCard';

import readBlogImg1 from '../../assets/blog_image_1.svg';
import readBlogPerfilImg1 from '../../assets/kevin_ibrahim.svg';

import readBlogImg2 from '../../assets/bloco_image_2.svg';
import readBlogPerfilImg2 from '../../assets/mike_jackson.svg';

import readBlogImg3 from '../../assets/bloco_image_3.svg';
import readBlogPerfilImg3 from '../../assets/bryan_mcgregor.svg';

import readBlogImg4 from '../../assets/bloco_image_4.svg';
import readBlogPerfilImg4 from '../../assets/jashua.svg';

export function ReadBlog() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>Read Our Blog</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className={styles.content}>
        <ReadBlogCard
          srcImage={readBlogImg1}
          title="Quick-start guide to nuts and seeds"
          srcImagePerfil={readBlogPerfilImg1}
          namePerfil="Kevin Ibrahim"
        />
        <ReadBlogCard
          srcImage={readBlogImg2}
          title="Nutrition: Tips for
          Improving Your Health"
          srcImagePerfil={readBlogPerfilImg2}
          namePerfil="Mike Jackson"
        />
        <ReadBlogCard
          srcImage={readBlogImg3}
          title="The top 10 benefits
          of eating healthy"
          srcImagePerfil={readBlogPerfilImg3}
          namePerfil="Bryan McGregor"
        />
        <ReadBlogCard
          srcImage={readBlogImg4}
          title="What Makes a
          Healthy Diet?"
          srcImagePerfil={readBlogPerfilImg4}
          namePerfil="Jashua"
        />
      </div>
    </div>
  );
}
