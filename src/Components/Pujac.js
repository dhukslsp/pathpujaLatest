import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ContextCreat from '../Context/Contextcreat';

function Pujac(props) {
    const mycontext = useContext(ContextCreat);
    const { fetchallnotes,changeimg,SetnoteNull } = mycontext;
    const pujaChange = (first,imgLink) => {
        SetnoteNull();
        fetchallnotes(first);
        changeimg(imgLink);
    }
    return (
        <div className='classpathstyle contents mb-6'>
            <Link to = {props.Sub === undefined?"/AboutService":"/"+props.Name1.replaceAll(" ","_")}>
                <a onClick={() => { pujaChange(props.Name1,props.src) }} className='card' style={{ "padding": "5px", "marginBottom": "20px", "marginLeft": "5px" }}>
                    <div className="searchimg">
                        <img alt="This is an alternating" src={props.src} style={{"width":"100%"}}/>
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