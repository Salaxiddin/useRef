import React , {useState}from "react";

const List = ()=>{
    let [numbers,setNumbers] =useState([1,2,3,4,5,6,7,8,9])

    React.useEffect(()=>{
        console.log("Component Did Muont");
        return ()=>{
            console.log("Component Will Unmount");
        }
    },[])

    React.useEffect(()=>{
        console.log("Component Did Update"); 
    },[numbers])
    
    const addNumbers = ()=>{
      const randomNum = Math.round(Math.random()*100)
        setNumbers([...numbers,randomNum])
    }
    return(
        <>
        <ul>
          {numbers.map((num,index)=>
            <li key={index}>{num}</li>
          )}
      </ul>
      <button onClick={addNumbers}>Add number</button>
      </>
    );
}

export default List;