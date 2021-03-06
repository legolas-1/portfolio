import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {


  return (
    <div className={styles.container}>
      <div className={`${styles.links}`} >
        <a href="https://www.linkedin.com/in/arpitsharma21/" className={styles.linkText}>LinkedIn</a></div>
      <div className={`${styles.links}`}>
        <a href="https://github.com/legolas-1" className={styles.linkText}>GitHub</a></div>
      <div className={`${styles.links}`}>
        <a href="https://codeforces.com/profile/xsanchez" className={styles.linkText}>Codeforces</a></div>
      <div className={`${styles.links}`}>
        <a href="https://www.codechef.com/users/xsanchez" className={styles.linkText}>Codechef</a></div>
    </div >
  );
}

export default Footer;

