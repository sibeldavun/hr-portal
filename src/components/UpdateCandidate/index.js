import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function UpdateCandidate({id}) {
  return (
   
        <div >
            <Link to={`/candidate/${id}/update`}><button className={styles.addItemBtn}>Update Candidate</button></Link>
        </div>

  )
}

export default UpdateCandidate