import React from 'react';

import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={`${styles.tabs} ${styles.label}`}>Home</div>
      <div className={`${styles.tabs} ${styles.label}`}>Who am I</div>
      <div className={`${styles.tabs} ${styles.label}`}>Contact</div>
      <div className={`${styles.tabs} ${styles.label}`}>Fun Stuff</div>
    </div>
  );
}

export default NavBar;

