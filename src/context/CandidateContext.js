import { createContext, useState, useEffect } from 'react'


const CandidateContext = createContext();

export const CandidateProvider =  ({children})=>{

    const [candidates, setCandidates] = useState(JSON.parse(localStorage.getItem("data") || "[]"));

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(candidates))
     
    },[candidates])

    const values = {
        candidates,
        setCandidates,
    };
    

    return(
        <CandidateContext.Provider value={values}>{children}</CandidateContext.Provider>
    )

}


export default CandidateContext;