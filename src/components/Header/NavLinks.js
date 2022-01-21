/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '../Button';

import { motion } from 'framer-motion';

const NavLinks = props => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <>
      <ul>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#recipes">HEALTHY RECIPES</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#readblog">BLOG</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#join">JOIN</a>
        </motion.li>
      </ul>
      <Link
        to="/register"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Button text="REGISTER" />
      </Link>
    </>
  );
};

export default NavLinks;
