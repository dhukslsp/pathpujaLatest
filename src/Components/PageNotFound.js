import React from 'react'
import { Link } from 'react-router-dom'
function pageNotFound() {
    return (
        <div className='flex justify-center'>
        <div className='flex flex-col'>
        <img src="images/Pathpuja.png" alt="" style = {{"height":"20pc"}}/>
        <p className='text-4xl'>Error 404 Not Found</p>
                Redirected Invalid page
                <Link to="/"><button style = {{"border":"2px solid black"}}>Click Here to go to home page</button></Link>
            </div>
        </div>
    )
}

export default pageNotFound
