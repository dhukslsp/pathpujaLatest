import React,{useState,useContext} from 'react'
import ContextCreat from '../Context/Contextcreat';

function Pujac(props) {
    const [first, setfirst] = useState();
    const mycontext = useContext(ContextCreat);
    const { fetchallnotes } = mycontext;
    const pujaChange = (first) =>{
        fetchallnotes(first);
    }
    return (
        <div className='classpathstyle contents mb-6'>
            <a onClick={()=>{pujaChange(props.Name1)}} className='card' style={{ "padding": "5px","marginBottom":"20px","marginLeft":"5px" }}>
                <div className="searchimg">
                    <img alt="" src="/images/Sa2.jpg" />
                </div>
                <div className="details">
                    <p className="font-extrabold" style = {{"wordWrap":"break-word"}}>{props.Name1}</p>
                </div>
            </a>
        </div>
    )
}

export default Pujac