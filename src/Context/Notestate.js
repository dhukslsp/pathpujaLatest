import Contextcreat from './Contextcreat';
import React, { useState,useEffect } from 'react';
const Notestate = (props) => {
    const [pujaname, changepujaname] = useState();
    const [first, setnotes] = useState([]);
    useEffect(() => {
        const fetchallnotes = async () => {
            const response = await fetch(`http://localhost:2001/api/Retrieve/myroute1/Satyanarayana Puja`, {
                method: 'GET'
            })
            const newjson = await response.json()
            setnotes(newjson);
            //Logic for editing for the client
        }
        fetchallnotes();
    }, [])
    return (
        <Contextcreat.Provider value={{ pujaname, changepujaname,first }}>
            {props.children}
        </Contextcreat.Provider>
    )
}

export default Notestate;