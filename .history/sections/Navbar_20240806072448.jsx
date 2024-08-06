import React from 'react';
import styles from './styles';

const NavigationBar = () => {
  return (
    <nav className={`${styles.flexCenter} ${styles.navPadding}`}>
      <ul className={`${styles.flexCenter} ${styles.innerWidth}`}>
        <li className={styles.paddings}><a href="#home">Home</a></li>
        <li className={styles.paddings}><a href="#about">About</a></li>
        <li className={styles.paddings}><a href="#explore">Explore</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
