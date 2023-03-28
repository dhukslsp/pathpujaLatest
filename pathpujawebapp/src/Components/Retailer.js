import React, { Component, useContext, useEffect, useState } from 'react'
import Context from '../Context/Contextcreat'
export default function Retailer() {
    const mycontext = useContext(Context);
    const { fetchPuja, custdet, fetchdCustDet } = mycontext;
    useEffect(() => {
        fetchPuja()
    }, [])
    const onClick = async (_id) => {
        console.log(_id);
        fetchdCustDet(_id);

    }
    const [auth, chauth] = useState(false);
    const auth1 = () => {
        if (document.getElementById("password").value === "mydashbord@12!") {
            chauth(true)
        }
        else {
            alert("invalid Password");
        }
    }
    return (
        <div>{
            auth === false ? <div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter the user id and password</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" id="password" placeholder="info@site.com" className="input input-bordered" />
                    </label>
                </div>
                <input type="button" value="Autheenticate" className='p-4' onClick={auth1} />
            </div> : <div className="overflow-x-auto">
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
                                        <div className="bg-base-100 shadow-xl">
                                            <div className="card-body">
                                                <h2 className="card-title">{elm.pujaname}</h2>
                                                <p>{elm.CusPhone}</p>
                                                <p>{elm.CusGmail}</p>
                                                <p>Price paid {elm.pices * 20 / 100}</p>
                                                <div className="card-actions justify-end"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='grid  grid-row-2 p-10'>
                                        <button className="btn btn-primary m-2" onClick={() => { onClick(elm._id) }}>Confirm</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>

        }

        </div>
    )
}
