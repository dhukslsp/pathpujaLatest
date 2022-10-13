import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ContextCreat from '../Context/Contextcreat';

function Pujac(props) {
    const mycontext = useContext(ContextCreat);
    const { fetchallnotes } = mycontext;
    const pujaChange = (first) => {
        fetchallnotes(first);
    }
    return (
        <div className='classpathstyle contents mb-6'>
            <Link to = "/AboutService">
                <a onClick={() => { pujaChange(props.Name1) }} className='card' style={{ "padding": "5px", "marginBottom": "20px", "marginLeft": "5px" }}>
                    <div className="searchimg">
                        <img alt="" src={props.src} style={{"width":"-webkit-fill-available"}}/>
                    </div>
                    <div className="details">
                        <p className="font-extrabold text-center" style={{ "wordWrap": "break-word" }}>{props.Name1}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Pujac