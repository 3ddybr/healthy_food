import React, { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text, ...rest }: buttonProps) {
  return (
    <div className={styles.container}>
      <button {...rest}>{text}</button>
    </div>
  );
}
