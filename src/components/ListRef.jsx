import React , {useState ,useEffect}from "react";

const List = ()=>{
    let [numbers,setNumbers] =useState([1,2,3,4,5,6,7,8,9])
    const ulRef = React.useRef()
    
    const addNumbers = ()=>{
      const randomNum = Math.round(Math.random()*100)
        setNumbers([...numbers,randomNum])
    }

    const ScrollEvent = ()=>{
        console.log("scroll!");
    }

    const removeScroll = ()=>{
      ulRef.current.removeEventListener('scroll',ScrollEvent)
    }

    useEffect(()=>{
      ulRef.current.addEventListener('scroll',ScrollEvent)
    },[])

    return(
        <>
        <ul ref={ulRef}>
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