import React from "react";
import { useFormik } from "formik";
import styles from "./styles.module.css";
import validations from "./validations";
import CandidateContext from "../../context/CandidateContext";
import { useContext } from "react";
import { v4 as uuid } from "uuid";
// import Brand from "../../components/Brand";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
function Hr() {
  const { candidates, setCandidates } = useContext(CandidateContext);

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        fullName: "",
        age: "",
        gender: "",
        country: "",
        city: "",
        email: "",
        phoneNumber: "",
        educationDegree: "",
        educationInformation: "",
        certificate: "",
        technicSkills: "",
        languages: "",
        courses: "",
        grade: "",
        wageExpectation: "",
        url: "",
      },

      onSubmit: (values, { resetForm }) => {
        console.log(JSON.stringify(values));
        setCandidates([
          ...candidates,
          { ...values, id: uuid(), createDate: new Date() },
        ]);
        resetForm({ values: "" });
      },
      validationSchema: validations,
    });
  return (
    <div>
      <Navbar />

      <div className={styles.main}>
        {/* <div className={styles.deneme}>
          <div className={styles.returnBox}>
            <Link to={`/search`}>
              <button className={styles.returnBtn}>
                Return To Search Page
              </button>
            </Link>
          </div>
          <div>
            <Brand />
          </div>
        </div> */}
        {/* <div className={styles.returnBox}>
            <Link to={`/search`}>
              <button className={styles.returnBtn}>
                Return To Search Page
              </button>
            </Link>
          </div> */}
        <div>
          <form onSubmit={handleSubmit} className={styles.card}>
            <div className={styles.formBox}>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Name Surname</label>
                <input
                  name="fullName"
                  placeholder="Enter name and surname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullName}
                  className={styles.cardInput}
                />
                {errors.fullName && touched.fullName && (
                  <div className={styles.errorMessage}>{errors.fullName} </div>
                )}
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Age</label>
                <input
                  name="age"
                  placeholder="Enter age"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.age}
                  className={styles.cardInput}
                />
                {errors.age && touched.age && (
                  <div className={styles.errorMessage}>{errors.age} </div>
                )}
              </div>
              <div className={styles.cardDetail}>
                <div className={styles.cardDetail}>
                  <label className={styles.lbl}>Gender</label>
                  <select
                    className={styles.sortBoxBtn}
                    name="gender"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.gender}
                  >
                    <option hidden value="">
                      &#8595;&#8593; Gender
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter country"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.country}
                  className={styles.cardInput}
                />
                {errors.country && touched.country && (
                  <div className={styles.errorMessage}>{errors.country} </div>
                )}
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.city}
                  className={styles.cardInput}
                />
                {errors.city && touched.city && (
                  <div className={styles.errorMessage}>{errors.city} </div>
                )}
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>E mail</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  className={styles.cardInput}
                />
                {errors.email && touched.email && (
                  <div className={styles.errorMessage}>{errors.email} </div>
                )}
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  className={styles.cardInput}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <div className={styles.errorMessage}>
                    {errors.phoneNumber}{" "}
                  </div>
                )}
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Education Degree</label>
                <select
                  className={styles.sortBoxBtn}
                  name="educationDegree"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.educationDegree}
                >
                  <option hidden value="Order By">
                    &#8595;&#8593; Education Degree
                  </option>
                  <option value="highschool">High School</option>
                  <option value="associateDegree">Associate Degree</option>
                  <option value="bachelarDegree">Bachelar Degree</option>
                  <option value="masterDegree">Master Degree</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Education Information</label>
                <input
                  type={"text"}
                  name="educationInformation"
                  placeholder="Enter education information"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.educationInformation}
                  className={styles.cardInput}
                />
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Certificate</label>
                <input
                  type={"text"}
                  name="certificate"
                  placeholder="Enter certificate"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.certificate}
                  className={styles.cardInput}
                />
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Technic Skills</label>
                <input
                  type={"text"}
                  name="technicSkills"
                  placeholder="Enter technic skills"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.technicSkills}
                  className={styles.cardInput}
                />
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Languages</label>
                <input
                  type={"text"}
                  name="languages"
                  placeholder="Enter languages"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.languages}
                  className={styles.cardInput}
                />
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Courses</label>
                <input
                  type={"text"}
                  name="courses"
                  placeholder="Enter courses"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.courses}
                  className={styles.cardInput}
                />
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Grade</label>
                <div className={styles.cardDetail}>
                  <select
                    className={styles.sortBoxBtn}
                    name="grade"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.grade}
                  >
                    <option hidden value="Order By">
                      &#8595;&#8593; Grade
                    </option>
                    <option value="Associate Junior Developer">
                      Associate Junior Developer
                    </option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Middle Developer">Mid Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Tech Lead">Tech Lead</option>
                    <option value="Team Lead">Team Lead</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Wage Expectation</label>
                <input
                  type="text"
                  name="wageExpectation"
                  placeholder="Enter wage expection"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.wageExpectation}
                  className={styles.cardInput}
                />
                {errors.wageExpectation && touched.wageExpectation && (
                  <div className={styles.errorMessage}>
                    {errors.wageExpectation}{" "}
                  </div>
                )}
              </div>
              <div className={styles.cardDetail}>
                <label className={styles.lbl}>Linkedin Url</label>
                <input
                  type="url"
                  name="url"
                  placeholder="Enter Linkedin Url"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.url}
                  className={styles.cardInput}
                />
                {errors.url && touched.url && (
                  <div className={styles.errorMessage}>{errors.url} </div>
                )}
              </div>
            </div>

            <div className={styles.formFooter}>
              <div className={styles.returnBox}>
                <Link to={`/search`}>
                  <button className={styles.btn}>Cancel</button>
                </Link>
              </div>
              <div>
                <button type="submit" className={styles.btn}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hr;
