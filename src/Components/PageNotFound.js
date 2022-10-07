import React from 'react'
import { Link } from 'react-router-dom'
function pageNotFound() {
    return (
        <div>
            Redirected Invalid   page
            <Link to = "/"><input type="button" text = "Click on this button to go to home page" /></Link>
        </div>
    )
}

export default pageNotFound
