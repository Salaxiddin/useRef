import React , {useState ,useEffect}from "react";

const List = ()=>{
    let [numbers,setNumbers] =useState([1,2,3,4,5,6,7,8,9])
    const timerRef = React.useRef()
    
    const addNumbers = ()=>{
        setNumbers((prev)=>[...prev,prev[prev.length -1]+1])
    }
    const StartAddNumbers =()=>{
      timerRef.current =   setInterval(addNumbers,1000)
    }
    const StopAddNumbers =()=>{
        clearInterval(timerRef.current)
    }

    return(
        <>
        <ul >
          {numbers.map((num,index)=>
            <li key={index}>{num}</li>
          )}
      </ul>
      <button onClick={addNumbers}>Add number</button>
      <button onClick={StartAddNumbers}>Start</button>
      <button onClick={StopAddNumbers}>Stop</button>
      </>
    );
}

export default List;