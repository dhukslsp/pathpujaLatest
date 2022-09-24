import React, { useState,useEffect } from 'react'
export default function ContextText() {
  const [first, setnotes] = useState();
  useEffect(() => {
    const fetchallnotes = async () => {
      const response = await fetch(`http://localhost:2001/api/Retrieve/myroute1/Rudrabhishek puja`, {
        method: 'GET'
      })
      const newjson = await response.json()
      setnotes(newjson);
      //Logic for editing for the client
    }
    fetchallnotes();
  }, [])
  
  return (
    <div className='text-black'>
        {first.map((elm)=>{return elm.name})}
    </div>
  )
}
