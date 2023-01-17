import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import styles from './styles.module.css';

function SortBox() {
        let [searchParams, setSearchParams] = useSearchParams();
        const [sort, setSort] = useState(searchParams.get("sort") || "");

        const changeSort=(event)=> {
            setSort(event.target.value)
            searchParams.delete("sort")
            searchParams.append("sort", event.target.value)
            setSearchParams(searchParams)
        }

        useEffect(() => {
          setSort(searchParams.get("sort") || "")
        }, [searchParams])
        
  return (
    <div>
        <select className={styles.sortBoxBtn} onChange={changeSort} value={sort} >
        <option hidden value="Order By">&#8595;&#8593;  Order By</option>
        <option value="nameascending">Name ascending</option>
        <option value="namedescending">Name descending</option>
       
      </select>

       
    </div>
  )
}

export default SortBox