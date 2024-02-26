import React, { useRef, useState } from 'react';

const UseRefHook = () => {
    const theName = useRef(null);
    let [show,SetShow] = useState(false);
    let val;
    const changeData =(e)=>{
        e.preventDefault();
        val = theName.current.value;
        val === " " ? alert('Enter some value'): SetShow(true);
        console.log(val);

    }

    
  return (
    <>
      <form action='' onSubmit={changeData}>
        <label htmlFor="theNme">Enter Name</label>
        <input type="text" id='theName' ref={theName}/>
        <button>Submit</button>
      </form>
      <p>{show? theName.current.value : 'error'}</p>

    </>
  )
}

export default UseRefHook;
