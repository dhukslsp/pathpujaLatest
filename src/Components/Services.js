import React, { useContext } from 'react'
import Pujadescshow from './Pujadescshow';
import Contextcreat from '../Context/Contextcreat'
function Services() {
    const new1 = useContext(Contextcreat);
    const {first} = new1;
    return (
        <div>
            {first.map(elm=>(<Pujadescshow 
                name = {elm.name} 
                Benifit1 = {elm.Benifit1} 
                Benifit2 = {elm.Benifit2} 
                Benifit3={elm.Benifit3} 
                Benifit4 = {elm.Benifit4} 
                Basic = {elm.Basic} 
                panditsB = {elm.Basic.Pandit}
                pricesB = {elm.Basic.Prices}
                subpujaB = {elm.Basic.Subpuja}
                hoursB = {elm.Basic.hours}
                Regular = {elm.Regular} 
                panditsR = {elm.Regular.Pandit}
                pricesR = {elm.Regular.Prices}
                subpujaR = {elm.Regular.Subpuja}
                hoursR = {elm.Regular.hours}
                Premium = {elm.Premium} 
                panditsP = {elm.Premium.Pandit}
                pricesP = {elm.Premium.Prices}
                subpujaP = {elm.Premium.Subpuja}
                hoursP = {elm.Premium.hours}
                Standard = {elm.Standard} 
                panditsS = {elm.Standard.Pandit}
                pricesS = {elm.Standard.Prices}
                subpujaS = {elm.Standard.Subpuja}
                hoursS = {elm.Standard.hours}
                />))}
        </div>
    )
}

export default Services