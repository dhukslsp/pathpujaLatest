import Contextcreat from './Contextcreat';
import React, { useState } from 'react';
const Notestate = (props) => {
    const [first, setnotes] = useState([]);
    const [custdet, setcustdet] = useState([]);
    const [Packagedesc, chpackage] = useState();
    const [imglink,changeimg] = useState("");
    const SetnoteNull = ()=>{
        setnotes([]);
    }
    const fetchallnotes = async (pujaname) => {
        const response = await fetch(`http://43.205.168.224:5001/api/Retrieve/myroute1/` + pujaname.replaceAll("/"," or "), {
            method: 'GET'
        })
        const newjson = await response.json()
        setnotes(newjson);
        console.log(pujaname);
        //Logic for editing for the client
    }
    const save_CustData = async (obj) => {
        const response = await fetch("http://43.205.168.224:5001/api/insert/CustDetSave", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'content-Type': 'application/json'
            }
        })
        console.log(response.json());
        console.log(JSON.stringify(obj));
    }
    const cust_sendMail = async (obj) => {
        const response = await fetch("http://localhost:2001/api/send/send_email", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'content-Type': 'application/json'
            }
        })
        console.log(response.json());
    }
    const fetchPuja = async () => {
        const response = await fetch("http://localhost:2001/api/Fetch/myroute1/fetchdetcUst", {
            method: 'get',
        })
        const newjson = await response.json()
        setcustdet(newjson);
    }
    const fetchdCustDet = async (id) => {
        const response = await fetch('http://localhost:2001/api/Fetch/myroute1/fetchdetcUst/' + id, {
            method: 'post',
        })
        const newjson = await response.json();
        const secondres = await fetch("http://localhost:2001/api/send/send_email1", {
            method: 'POST',
            body: JSON.stringify(newjson[0]),
            headers: {
                'content-Type': 'application/json'
            }
        })
        console.log(newjson[0].CusPinCode);
    }
    return (
        <Contextcreat.Provider value={{ first, fetchallnotes, chpackage, Packagedesc, save_CustData, cust_sendMail, custdet, fetchPuja, fetchdCustDet,imglink,changeimg,SetnoteNull }}>
            {props.children}
        </Contextcreat.Provider>
    )
}

export default Notestate;
