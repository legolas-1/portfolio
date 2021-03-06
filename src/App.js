import React, { useState } from 'react';
import styles from './App.module.css';

import Homepage from './components/Homepage/Homepage';

const App = () => {

  const [show, setShow] = useState(true);

  const onClick = () => {
    setShow(!show);
  };


  return (
    show ? (
      <div className={`${styles.root} ${styles.pageHeader}`}>
        <div className={`${styles.glitch} ${styles.click}`} onClick={onClick} data-text="Stay Hungry Stay Foolish">Stay Hungry Stay Foolish</div>
      </div>
    ) : (<Homepage> Clicked </Homepage >)
  );
}

export default App;
