import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function AddNewCandidates() {
  return (
   
        <div >
            <Link to="/hr"><button className={styles.addItemBtn}>Add new record</button></Link>
        </div>

  )
}

export default AddNewCandidates