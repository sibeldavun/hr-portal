import React from 'react';
import styles from './styles.module.css';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    
    // Home start
    <div className={styles.container}>
      <div className={styles.titleCard}>
        <h1 className={styles.title}>Welcome</h1>
        <h1 className={styles.title}>Candidate </h1>
        <h1 className={styles.title}> Portal</h1>
      </div>
    </div>
    // Home end
  )
}
export default Home;