import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Brand() {
  return (
    <div>
      <Link to="/"> <input className={styles.img} type="image" src="../../assets/brand2.png" alt="Brand Image" loading="lazy" /></Link>
    </div>
  )
}
export default Brand;