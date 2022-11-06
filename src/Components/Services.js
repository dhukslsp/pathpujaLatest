import React, { useContext } from 'react'
import Pujadescshow from './OtherPujaPages/Pujadescshow';
import Contextcreat from '../Context/Contextcreat'
import NoPuja from '../Components/InnerPages/NoPuja'
function Services() {
    const new1 = useContext(Contextcreat);
    const {first} = new1;
    return (
        <div>
            {
                first.length!==0?first.map(elm=>(<Pujadescshow
                name = {elm.name} 
                describe = {elm.Desc}
                Benifit1 = {elm.Benifit1}
                Benifit2 = {elm.Benifit2}
                Benifit3={elm.Benifit3}
                Benifit4 = {elm.Benifit4}
                Basic = {elm.Basic[0]}
                panditsB = {elm.Basic[0].Pandit}
                pricesB = {elm.Basic[0].Prices}
                subpujaB = {elm.Basic[0].Subpuja}
                hoursB = {elm.Basic[0].hours}
                Regular = {elm.Regular[0]}
                panditsR = {elm.Regular[0].Pandit}
                pricesR = {elm.Regular[0].Prices}
                subpujaR = {elm.Regular[0].Subpuja}
                hoursR = {elm.Regular[0].hours}
                Premium = {elm.Premium[0]}
                panditsP = {elm.Premium[0].Pandit}
                pricesP = {elm.Premium[0].Prices}
                subpujaP = {elm.Premium[0].Subpuja}
                hoursP = {elm.Premium[0].hours}
                Standard = {elm.Standard[0]}
                panditsS = {elm.Standard[0].Pandit}
                pricesS = {elm.Standard[0].Prices}
                subpujaS = {elm.Standard[0].Subpuja}
                hoursS = {elm.Standard[0].hours}
                />)):<NoPuja/>}
        </div>
    )
}

export default Services
