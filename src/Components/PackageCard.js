import React from 'react'

function PackageCard(props) {
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
                    <button className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    )
}

export default PackageCard