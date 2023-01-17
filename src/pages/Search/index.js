import React from "react";
import CandidateContext from "../../context/CandidateContext";
import { useContext } from "react";
import SortBox from "../../components/SortBox";
import Pagination from "../../components/Pagination";
import SearchBox from "../../components/SearchBox";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Link from "../../components/Link";
import styles from './styles.module.css';
import AddNewCandidates from "../../components/AddNewCandidates";

function Search() {
  useEffect(() => {
    document.title = "Search";
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
      <AddNewCandidates />
      {data.length > 0 ? (
        <div>
          <SearchBox />
          <SortBox />
          <div>
            <ul>
                {
                    data.map((item) => {
                        return <li className={styles.item} key={item.id}><Link values={item}></Link> </li>
                    })
                }
            </ul>
        </div>
          <Pagination pageCount={totalPageCount} />

        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
