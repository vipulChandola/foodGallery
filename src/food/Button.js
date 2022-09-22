import React from 'react'
import { Images } from "./Images";
export default function Button({filteritem,setfirst}) {
  
  return (
    <>
    {/* {btn.map((e)=>{
        return ()
    })} */}
    <button
          type="button"
          onClick={() =>setfirst(Images)}
          className="btn btn-info "
        >
          All
        </button>
        <button
          type="button"
          onClick={() => filteritem("breakfast")}
          className="btn btn-info mx-5"
        >
          brfst
        </button>
        <button
          type="button"
          onClick={() => filteritem("lunch")}
          className="btn btn-info"
        >
          lunch
        </button>
        <button
          type="button"
          onClick={() => filteritem("dinner")}
          className="btn btn-info mx-5"
        >
          dinner
        </button>
    </>
   
  )
}
