import React from "react";
import styles from "./styles.module.css";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import SearchBox from "../../components/SearchBox";
import {useContext} from "react";
import AuthContext from '../../context/AuthContext'
function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.titleCard}>
          <h1 className={styles.title}>Welcome</h1>
          <h1 className={styles.title}>Candidate </h1>
          <h1 className={styles.title}> Portal</h1>
        </div>
        {isLoggedIn ? <SearchBox/>: ""}
      </div>
    </div>
    // Home start

    // Home end
  );
}
export default Home;
