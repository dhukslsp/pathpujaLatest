import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Contextcreat from '../../Context/Contextcreat'
function PackageCard(props) {
    const fetch = useContext(Contextcreat);
    const { chpackage } = fetch;
    const runner = async () => {
        const packageObj = {
            "pujaname": props.pujaname,
            "packageName": props.package,
            "pandits": props.pandits,
            "pices": props.prices,
            "subpuja": props.subpuja,
            "hours": props.hours
        }
        chpackage(packageObj)
    }

    return (
        <div className="bg-white lg:ml-5 md:ml-5 sm:ml-0 rounded-2xl p-2 mb-10" style = {{"width":"16pc"}}>
            <div className="card-body  rounded-lg" style={{"height":"15pc"}}>
                <h2 className="card-title justify-center font-extrabold">{props.package}</h2>
                <ul className='pt-4'>
                    <li>{props.subpuja === "NA"?"":props.subpuja}</li>
                    <li><p className='font-bold inline'>Time - </p> {props.hours}</li>
                    <li><p className='font-bold inline'>Pandit's -</p> {props.pandits}</li>
                    <li><p className='font-bold inline'>Amount - ₹{props.prices}</p></li>
                </ul>
            </div>
            <div className="card-actions justify-center pb-4 mb-5">
                <Link to="/Detailing"><button className="btn btn-primary" onClick={runner}>Select</button></Link>
            </div>

        </div>
    )
}

export default PackageCard