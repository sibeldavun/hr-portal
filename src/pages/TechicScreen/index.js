import React from "react";
import { useFormik } from "formik";
import styles from "./styles.module.css";
import CandidateContext from "../../context/CandidateContext";
import { useContext } from "react";
import validations from "./validations";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
function Techic() {
  const { id } = useParams();

  const navigate = useNavigate();
  const { candidates, setCandidates } = useContext(CandidateContext);

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        technicalCaseNotes: "",
        technicalCaseScore: "",
        technicalInterviewNotes: "",
        technicalInterviewScore: "",
      },
      onSubmit: (values, { resetForm }) => {
        console.log(JSON.stringify(values));

        const yourNextList = [...candidates];

        const item = yourNextList.find((a) => a.id === id);
        item.technicalCaseNotes = values.technicalCaseNotes;
        item.technicalCaseScore = values.technicalCaseScore;
        item.technicalInterviewNotes = values.technicalInterviewNotes;
        item.technicalInterviewScore = values.technicalInterviewScore;

        setCandidates(yourNextList);
        resetForm({ values: "" });
        navigate({
          pathname: '/candidate/' + id + ''
      })

      },
      validationSchema: validations,
    });
  return (
    <div>
    <Navbar />
    <div className={styles.main}>
      <div className={styles.card}>
        
        <form onSubmit={handleSubmit} className={styles.formBox}>
          <div className={styles.cardDetail}>
            <label className={styles.lbl}>Technical Case Notes</label>
            <input
              type={"text"}
              name="technicalCaseNotes"
              placeholder="Enter technical Case Notes"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.technicalCaseNotes}
              className={styles.cardInput}
            />
          </div>
          <div className={styles.cardDetail}>
            <label className={styles.lbl}>Technical Case Score </label>
            <input
              type={"text"}
              name="technicalCaseScore"
              placeholder="Enter Technical Case Score"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.technicalCaseScore}
              className={styles.cardInput}
            />
            {errors.technicalCaseScore && touched.technicalCaseScore && (
              <div className={styles.errorMessage}>
                {errors.technicalCaseScore}{" "}
              </div>
            )}
          </div>
          <div className={styles.cardDetail}>
            <label className={styles.lbl}>Technical Interview Notes</label>
            <input
              type={"text"}
              name="technicalInterviewNotes"
              placeholder="Enter Technical Interview Notes"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.technicalInterviewNotes}
              className={styles.cardInput}
            />
          </div>
          <div className={styles.cardDetail}>
            <label className={styles.lbl}>Technical Interview Score</label>
            <input
              type={"text"}
              name="technicalInterviewScore"
              placeholder="Enter Technical Interview Scorer"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.technicalInterviewScore}
              className={styles.cardInput}
            />
            {errors.technicalInterviewScore && touched.technicalInterviewScore && (
              <div className={styles.errorMessage}>
                {errors.technicalInterviewScore}{" "}
              </div>
            )}
          </div>
          <div className={styles.returnBox}>
          <Link to={`/candidate/${id}`}>
            <button className={styles.returnBtn}>Cancel</button>
          </Link>
        </div>
          <button className={styles.btn}>Submit</button>
        </form>
      </div>
    </div>
    </div>

  );
}

export default Techic;
