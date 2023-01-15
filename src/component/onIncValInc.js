import React, { useEffect, useState } from "react";

const OnIncValInc = ()=>{
// let val  =0;
    const[val,setVal] = useState(0)
    return(

        <div style={{backgroundColor:"red",height:"400px",width:"500px",  display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',}}>
            <h6>{val}</h6>
<button  onClick={()=>{
    setVal(val+1)
}}>inc button</button>
    </div>)
}
export default OnIncValInc;