import React from 'react';
import { useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from './styles.module.css';

export default function SearchBox() {
   

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();

    const [searchInput, setSearchInput] = useState(searchParams.get("q") || "");

    const changeInput = (event) => {
        setSearchInput(event.target.value)
    }

    const navigateToSearch = () => {
        const q = searchInput === "" ? "" : `?q=${searchInput}`
        navigate({
            pathname: '/search',
            search: q
        })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(searchInput);
        navigateToSearch();
        
    }

    


  return (
    <div>
        
        <form className={styles.form} onSubmit={submit}>
                <input className={styles.searchInput} value={searchInput} onChange={changeInput} />
                <button className={styles.searchBtn} type='submit'>Search</button>
        </form>
    </div>
  )
}
