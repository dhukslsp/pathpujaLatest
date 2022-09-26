import Contextcreat from './Contextcreat';
import React, { useState } from 'react';
const Notestate = (props) => {
    const [first, setnotes] = useState([]);
    const [Packagedesc, chpackage] = useState()
    const fetchallnotes = async (pujaname) => {
        const response = await fetch(`http://localhost:2001/api/Retrieve/myroute1/`+pujaname, {
            method: 'GET'
        })
        const newjson = await response.json()
        setnotes(newjson);
        //Logic for editing for the client
    }
    return (
        <Contextcreat.Provider value={{ first,fetchallnotes,chpackage,Packagedesc }}>
            {props.children}
        </Contextcreat.Provider>
    )
}

export default Notestate;