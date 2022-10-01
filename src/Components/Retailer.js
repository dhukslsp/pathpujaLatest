import React, { Component, useContext, useEffect } from 'react'
import Context from '../Context/Contextcreat'
export default function Retailer() {
    const mycontext = useContext(Context);
    const { fetchPuja, custdet,fetchdCustDet } = mycontext;
    useEffect(() => {
        fetchPuja()
    }, [])
    const onClick = async(_id) =>{
        console.log(_id);
        fetchdCustDet(_id);
        
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Custumer Name</th>
                            <th>Selected desc</th>
                            <th>Confirmaation</th>
                        </tr>
                    </thead>
                    {custdet.map((elm) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{elm.CusfName} {elm.CuslName}</td>
                                    <td>
                                        <div className="card w-full bg-base-100 shadow-xl">
                                            <div className="card-body">
                                                <h2 className="card-title">{elm.pujaname}</h2>
                                                <p>{elm.CusPhone}</p>
                                                <p>{elm.CusGmail}</p>
                                                <p>Price paid {elm.pices*20/100}</p>
                                                <div className="card-actions justify-end"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='grid  grid-row-2 p-10'>
                                        <button className="btn btn-primary m-2" onClick={()=>{onClick(elm._id)}}>Confirm</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}
