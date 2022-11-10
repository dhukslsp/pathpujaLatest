import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ContextCreat from '../Context/Contextcreat';
function Pujac2(props) {
    const mycontext = useContext(ContextCreat);
    const { fetchallnotes,changeimg } = mycontext;
    const pujaChange = (first,imgLink) => {
        fetchallnotes(first);
        changeimg(imgLink);
    }
    return (
        <div className='classpathstyle contents mb-6'>
            <Link to="/subpujadisp">
                <a onClick={() => { pujaChange(props.Name1, props.src) }} className='card' style={{ "padding": "5px", "marginBottom": "20px", "marginLeft": "5px" }}>
                    <div className="searchimg">
                        <img alt="" src={props.src} style={{ "width": "-webkit-fill-available" }} />
                    </div>
                    <div className="details">
                        <p className="font-extrabold text-center" style={{ "wordWrap": "break-word" }}>{props.Name1}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Pujac2