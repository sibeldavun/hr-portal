import React,{useContext} from "react";
import { useFormik } from "formik";
import validations from './validations';
import styles from "./styles.module.css";
import AuthContext from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

function Login() {
    const { setIsHr, setIsLoggedIn } = useContext(AuthContext);

    const navigate = useNavigate();

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },

      onSubmit: (values) => {
        if(values.email === "sibeldavun.96@gmail.com"){
            setIsLoggedIn(true);
            setIsHr(true);
        }
        else if(values.email === "elgunatahan@gmail.com"){
            setIsLoggedIn(true);
            setIsHr(false);
        }
        else{
            alert("Username or password is wrong")
            return;
        }
        navigate({
            pathname: '/'
        })
        console.log(JSON.stringify(values));
      },
      validationSchema: validations,
    });
  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit} className={styles.formBox}>
        <div className={styles.cardDetail}>
          <label className={styles.lbl}>Email</label>
          <input
            type='email'
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
          <label className={styles.lbl}>Password</label>
          <input
          type='password'
            name="password"
            placeholder="Enter password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            className={styles.cardInput}
          />
          {errors.password && touched.password && (
            <div className={styles.errorMessage}>{errors.password} </div>
          )}
        </div>
                <button  type='submit' className={styles.btn}>Login</button>

      </form>
    </div>
  );
}

export default Login;
