import React from "react";
import CandidateContext from "../../context/CandidateContext";
import { useContext } from "react";
import SortBox from "../../components/SortBox";
import Pagination from "../../components/Pagination";
import SearchBox from "../../components/SearchBox";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Candidate from "../../components/Candidate";
import styles from "./styles.module.css";
import AddNewCandidates from "../../components/AddNewCandidates";
import Brand from "../../components/Brand";
import Navbar from "../../components/Navbar";
function Search() {
  useEffect(() => {
    document.title = "HR PORTAL";
  }, []);

  const { candidates } = useContext(CandidateContext);

  let [searchParams] = useSearchParams();
  
  let filter = searchParams.get("q");
  filter = filter === null ? "" : filter;
  let data = candidates.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toLocaleLowerCase())
    );
  });

  let sort = searchParams.get("sort");
  if (sort === "nameascending") {
    data.sort((a, b) => {
      return a["fullName"].localeCompare(b["fullName"]);
    });
  } else if (sort === "namedescending") {
    data.sort((a, b) => {
      return b["fullName"].localeCompare(a["fullName"]);
    });
  }

  let pageNumber = searchParams.get("page");
  pageNumber = pageNumber === null ? 1 : pageNumber;
  const indexOfLastRecord = pageNumber * 5; //5 = recordsperpage
  const indexOfFirstRecord = indexOfLastRecord - 5;

  const totalPageCount = Math.ceil(data.length / 5);

  data = data.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div>

      <Navbar />
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {/* <Brand /> */}
          <SearchBox />
        </div>
        {/* <div>
          <AddNewCandidates />
        </div> */}
      </div>
      {data.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.sortBox}>
            <SortBox />
          </div>
          <div>
            <ul>
              {data.map((item) => {
                return (
                  <li className={styles.item} key={item.id}>
                    <Link to={`/candidate/${item.id}`}>
                      <Candidate values={item}></Candidate>{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.paginationBox}>
            <Pagination pageCount={totalPageCount} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
