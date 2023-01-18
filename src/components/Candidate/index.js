import React from 'react'
import styles from './styles.module.css'

function Candidate({ values }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardRight}>
        <div className={styles.grayColor}>
          {values.fullName}
        </div>
        <div className={styles.grayColor}>
            {values.phoneNumber}
          </div>
        
      </div>
      <div className={styles.cardLeft}>    
        <div className={styles.locationInfo}>
          <div style={{ fontWeight: "bold" }}>
            {values.grade}
          </div>
          <div className={styles.blackColor}>
            {values.city}
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Candidate;