import React from 'react';

import styles from './Skill.module.css';

const Skill = (props) => {
  const {
    list
  } = props;

  const getSkillList = (list) => {
    return list.map((cur) => {
      return (<div className={styles.root}>
        <div className={`${styles.rating} ${styles.score}`}>
          <div data-text={cur.rating} className={`${styles.ratingText} `}>
            {cur.rating}
          </div>
        </div>
        <div className={styles.text}>
          {cur.text}
        </div>
      </div>);
    })
  };

  return (
    <div className={styles.skills}>
      {getSkillList(list)}
    </div>
  );
}

export default Skill;

