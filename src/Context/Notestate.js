import Contextcreat from './Contextcreat';
import React from 'react';

const Notestate = (props)=>{
    const myval  = 'This String'
    return(
        <Contextcreat.Provider value = {{myval}}>
            {props.children}
        </Contextcreat.Provider>
    )
}

export default Notestate;