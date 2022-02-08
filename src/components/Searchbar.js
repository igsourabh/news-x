import React, { useState } from 'react';
import { changeTextColor } from '../Redux/searchSlice';
import { useDispatch } from 'react-redux';
const Searchbar = () => {
    const dispatch=useDispatch()
    const [value, setvalue] = useState("");

    const handelchange=(e)=>{
      setvalue(e.target.value)
  
    }

  const handelclick=()=>{
dispatch(changeTextColor(value));
  }
  return(
<>



<div className="container"style={{display:"flex", width:"21rem" ,margin:"0 auto 0 auto"}}>

<input
      type="email"
      onChange={handelchange}
      name="email"
      value={value}
      className="form-control mx-2"
      id="emailAddress"
      
    
      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
     <button  onClick={handelclick}  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-2">
    Button
  </button>
      </div>
</>

  )
};

export default Searchbar;
