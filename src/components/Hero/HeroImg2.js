import styles from '@/styles/HeroImg2.module.css';
import React from 'react';



const HeroImg2 = (props)=> {
  
    return (
      <div className={styles.heroImg}>
        <div className={styles.heading}>
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    );
  
  
}

export default HeroImg2;