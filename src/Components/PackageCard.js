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
        <div className="card w-60 bg-base-100 shadow-xl m-12">
            <div className="card-body bg-white">
                <h2 className="card-title">{props.package}</h2>
                <ul className='list-disc'>
                    <li>{props.pandits}</li>
                    <li>Price ₹{props.prices}</li>
                    <li>{props.subpuja}</li>
                    <li>{props.hours}</li>
                </ul>
                <div className="card-actions justify-end">
                <Link to="/Detailing"><button className="btn btn-primary" onClick={runner}>Select</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PackageCard