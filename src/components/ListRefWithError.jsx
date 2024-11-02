import React , {useState ,useEffect}from "react";

const List = ()=>{
    let ul
    let [numbers,setNumbers] =useState([1,2,3,4,5,6,7,8,9])
    
    const addNumbers = ()=>{
      const randomNum = Math.round(Math.random()*100)
        setNumbers([...numbers,randomNum])
    }

    const ScrollEvent = ()=>{
        console.log("scroll!");
    }

 

    useEffect(()=>{
        ul = document.querySelector("ul")
        ul.addEventListener('scroll',ScrollEvent)
    },[])

    const removeScroll =()=>{
        ul.removeEventListener("scroll",ScrollEvent)
    }

    return(
        <>
        <ul>
          {numbers.map((num,index)=>
            <li key={index}>{num}</li>
          )}
      </ul>
      <button onClick={addNumbers}>Add number</button>
      <button onClick={removeScroll}>Remove Scroll</button>
      </>
    );
}

export default List;