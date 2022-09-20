import React, { useContext } from 'react'
import Contextcreat from '../Context/Contextcreat'
export default function ContextText() {
    const home = useContext(Contextcreat);
     const{myval}=home;
  return (
    <div>
        The val of my val is {myval}
    </div>
  )
}
