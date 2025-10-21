import React from 'react';
import { Outlet, useNavigate} from 'react-router-dom';

const Concat = () => {
    const naw=useNavigate()

    const handCl=(id)=>{
        if(id===1){
            return naw('/concat/pl')
        }
        if(id===2){
            return naw('/concat/en')
        }
        }   
    return (
        <div>
            Kontakt:<br/>
            <button onClick={()=>handCl(1)}> PL</button>
            <button onClick={()=>handCl(2)}> En</button>
            <Outlet/>
        </div>
    );
}

export default Concat;
