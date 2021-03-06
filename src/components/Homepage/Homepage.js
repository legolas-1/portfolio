import React from 'react';

// import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Skill from '../Skill/Skill';
import About from '../About/About';

import styles from './Homepage.module.css';

const Homepage = () => {

  let list = [
    { text: 'C++', rating: '07' },
    { text: 'JavaScript', rating: '06' },
    { text: 'Git', rating: '08' },
    { text: 'React', rating: '07' },
    { text: 'Python', rating: '07' },
    { text: 'Firebase', rating: '06' },
    { text: 'GraphQL', rating: '06' },
    { text: 'CSS', rating: '07' }
  ];

  return (
    <div className={`${styles.root1} ${styles.pageHeader}`}>
      <div className={styles.container}>
        {/* <NavBar /> */}
        <div className={styles.body}>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              Hi
              <br />
                I am Arpit
            </div>
            {/* <div className={styles.role} onClick={openDialouge}>
              <span className={styles.spanText1}> Developer </span>
              <span className={styles.spanText2}> Developer </span>
            </div> */}
          </div>
        </div>

      </div>

      <About />
      <Skill list={list} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Footer />
      </div>
    </div >
  );
}

export default Homepage;
