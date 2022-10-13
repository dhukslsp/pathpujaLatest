import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Contextcreat from '../Context/Contextcreat'
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
        <div className="card1 w-60 bg-base-100 shadow-xl m-12">
            <div className="card-body bg-white rounded-lg" style = {{"height":"18.5pc"}}>
                <h2 className="card-title">{props.package}</h2>
                <ul className=''>
                    <li>{props.subpuja}</li>
                    <li>Time - {props.hours}</li>
                    <li>Pandit's - {props.pandits}</li>
                    <li>Amount - ₹{props.prices}</li>
                </ul>
                <div className="card-actions justify-end">
                    <Link to="/Detailing"><button className="btn btn-primary" onClick={runner}>Select</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PackageCard