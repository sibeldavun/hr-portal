import React from 'react'
import { useFormik } from 'formik'
import styles from './styles.module.css';
import CandidateContext from '../../context/CandidateContext';
import { useContext } from 'react';
import validations from './validations';


function Techic() {
    const { candidates, setCandidates } = useContext(CandidateContext);

      const { handleSubmit, handleChange, values,  handleBlur , errors , touched } = useFormik({
        initialValues: {
          technicalCaseNotes:'',
          technicalCaseScore: '',
          technicalInterviewNotes: '',
          technicalIntScore:'' ,
        },
        onSubmit: (values, { resetForm }) =>{
            console.log(JSON.stringify(values))
            setCandidates([...candidates, { ...values}])
            resetForm({ values: '' })
            
        },
        validationSchema: validations,
    })
    return (
    
        <div className={styles.main}>
          <div className={styles.card}>
            <form onSubmit={handleSubmit} className={styles.formBox}>
                
                <div className={styles.cardDetail}>
                    <label className={styles.lbl}>Technical Case Notes</label>
                    <input type={'text'} name='technicalCaseNotes' placeholder='Enter technical Case Notes' onBlur={handleBlur} onChange={handleChange} value={values.technicalCaseNotes} className={styles.cardInput} />
                </div>
                <div className={styles.cardDetail}>
                    <label className={styles.lbl}>Technical Case Score </label>
                    <input type={'text'} name='technicalCaseScore' placeholder='Enter Technical Case Score' onBlur={handleBlur} onChange={handleChange} value={values.technicalCaseScore} className={styles.cardInput}/>
                    {errors.technicalCaseScore && touched.technicalCaseScore &&
                                (<div className={styles.errorMessage}>{errors.technicalCaseScore} </div>)}
                </div>
                <div className={styles.cardDetail}>
                    <label className={styles.lbl}>Technical Interview Notes</label>
                    <input type={'text'} name='technicalInterviewNotes' placeholder='Enter Technical Interview Notes' onBlur={handleBlur} onChange={handleChange} value={values.technicalInterviewNotes} className={styles.cardInput} />
                </div>
                <div className={styles.cardDetail}>
                    <label className={styles.lbl}>Technical Interview Score</label>
                    <input type={'text'} name='technicalIntScore' placeholder='Enter Technical Interview Scorer' onBlur={handleBlur} onChange={handleChange} value={values.technicalIntScore}  className={styles.cardInput}/>
                    {errors.technicalIntScore && touched.technicalIntScore &&
                                (<div className={styles.errorMessage}>{errors.technicalIntScore} </div>)}
                </div>
               

                <button className={styles.btn}>Submit</button>

            </form>
            </div>

        </div >
    
  )
}

export default Techic;