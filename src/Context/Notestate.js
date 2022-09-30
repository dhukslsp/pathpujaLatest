import Contextcreat from './Contextcreat';
import React, { useState } from 'react';
const Notestate = (props) => {
    const [first, setnotes] = useState([]);
    const [custdet, setcustdet] = useState([]);
    const [Packagedesc, chpackage] = useState();
    const fetchallnotes = async (pujaname) => {
        const response = await fetch(`http://localhost:2001/api/Retrieve/myroute1/`+pujaname, {
            method: 'GET'
        })
        const newjson = await response.json()
        setnotes(newjson);
        //Logic for editing for the client
    }
    const save_CustData =async(obj) =>{
        const response = await fetch("http://localhost:2001/api/insert/CustDetSave", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'content-Type': 'application/json'
            }
          })
        console.log(response.json());
        console.log(JSON.stringify(obj));
    }
    const cust_sendMail = async(obj) =>{
        const response = await fetch("http://localhost:2001/api/send/send_email", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'content-Type': 'application/json'
            }
          })
          console.log(response.json());
    }
    const fetchPuja = async() =>{
        const response = await fetch("http://localhost:2001/api/Fetch/myroute1/fetchdetcUst", {
            method: 'get',
          })
          const newjson = await response.json()
          setcustdet(newjson);
    }
    return (
        <Contextcreat.Provider value={{ first,fetchallnotes,chpackage,Packagedesc,save_CustData,cust_sendMail,custdet,fetchPuja }}>
            {props.children}
        </Contextcreat.Provider>
    )
}

export default Notestate;
