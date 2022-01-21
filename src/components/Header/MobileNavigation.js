import React, { useState } from 'react';

import NavLinks from './NavLinks';
import { CgMenuRound } from 'react-icons/cg';
import { CgCloseO } from 'react-icons/cg';
import styles from './styles.module.scss';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound
      className={styles.Hamburger}
      size="40px"
      color="black"
      onClick={() => {
        setOpen(!open);
        console.log(open);
      }}
    />
  );
  const closeIcon = (
    <CgCloseO
      className={styles.Hamburger}
      size="40px"
      color="black"
      onClick={() => {
        setOpen(!open);
        console.log(open);
      }}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={styles.MobileNavigation}>
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      {open ? closeIcon : hamburgerIcon}
    </nav>
  );
};

export default MobileNavigation;
