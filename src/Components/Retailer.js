import React, { Component } from 'react'

export default class Retailer extends Component {
    render() {
        return (
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Custumer Name</th>
                                <th>Selected desc</th>
                                <th>Confirmaation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <h2 className="card-title">Shoes!</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <div className="card-actions justify-end">

                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='grid  grid-row-2 p-10'>
                                    <button className="btn btn-primary m-2">Confirm</button>
                                    <button className="btn btn-primary bg-red m-2">Del</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
