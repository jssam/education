import React, {useState} from "react";
import './App.css';
import OnIncValInc from "./component/onIncValInc";

const App = ()=>{
    const[val,setVal] = useState(0)
  return(
      <div >
        <OnIncValInc></OnIncValInc>
          <h6>{val}</h6>
          <button  onClick={()=>{
              setVal(val+1)
          }}>inc button</button>
      </div>
  )
}

export default App;
