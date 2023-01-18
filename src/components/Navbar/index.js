import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import AddNewCandidates from "../AddNewCandidates";
import Brand from "../Brand";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const logOut = () => {
    setIsLoggedIn(false);
    navigate({
      pathname: "/login",
    });
  };
  return (
    <div className={styles.nav}>
      <div className={styles.navItems}>
        <div>
          <Brand />
        </div>
        <div>
          <AddNewCandidates />
        </div>
      </div>

      {!isLoggedIn ? (
        <div className={styles.returnBox}>
          <Link to="/login">
            <button className={styles.returnBtn}>Login</button>
          </Link>
        </div>
      ) : (
        <div className={styles.returnBox}>
          <button onClick={logOut} className={styles.returnBtn}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
