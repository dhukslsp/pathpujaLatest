import Contextcreat from './Contextcreat';
import React,{useState} from 'react';
const Notestate = (props) => {
   const [pujaname,changepujaname] = useState();
    return (
        <Contextcreat.Provider value={{ pujaname,changepujaname}}>
            {props.children}
        </Contextcreat.Provider>
    )
}

export default Notestate;