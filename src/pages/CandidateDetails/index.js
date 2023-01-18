import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./styles.module.css";
import CandidateContext from "../../context/CandidateContext";
import { useContext } from "react";
import UpdateCandidate from "../../components/UpdateCandidate";
import Navbar from "../../components/Navbar";
import AuthContext from "../../context/AuthContext";
function CandidateDetails() {
  const { candidates } = useContext(CandidateContext);
  const { isHr } = useContext(AuthContext);
  const { id } = useParams();

  const values = candidates.find((a) => a.id === id);

  return (
    <div>
      <Navbar />

      <div>
        <div className={styles.starshipdetails}>
          <div className={styles.card}>
            <h1 className={styles.title}>{values.fullName}</h1>
            <p className={styles.property}>
              <span className={styles.propertyName}>Age: </span>
              {values.age}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Gender: </span>
              {values.gender}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Country: </span>
              {values.country}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>City: </span>
              {values.city}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Email: </span>
              {values.email}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Phone Number: </span>
              {values.phoneNumber}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Education Degree: </span>
              {values.educationDegree}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>
                Education Information:{" "}
              </span>
              {values.educationInformation}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Certificate: </span>
              {values.certificate}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Technic Skills: </span>
              {values.technicSkills}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Languages: </span>
              {values.languages}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Courses: </span>
              {values.courses}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Grade: </span>
              {values.grade}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Wage Expectation: </span>
              {values.wageExpectation}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>Url: </span>
              {values.url}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>
                Technical Case Notes:{" "}
              </span>
              {values.technicalCaseNotes}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>
                Technical Case Score:{" "}
              </span>
              {values.technicalCaseScore}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>
                Technical Interview Notes:{" "}
              </span>
              {values.technicalInterviewNotes}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyName}>
                Technical Interview Score:{" "}
              </span>
              {values.technicalInterviewScore}
            </p>
          </div>
        </div>
        <div className={styles.detailsFooter}>
          <div className={styles.updatecandidate}>
            <Link to={`/search`}>
              <button className={styles.returnBtn}>
                Return To Search Page
              </button>
            </Link>
          </div>
          {!isHr ? (
            <div className={styles.updatecandidate}>
              <UpdateCandidate id={id} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default CandidateDetails;
