import React, { useEffect, useState } from "react";
import { MultipleCustomHooks } from "../examples-03/MultipleCustomHooks";
import '../useEffect-02/effects.css';

export const RealExampleRef = () => {

    

    const [show,setShow] = useState(false);


    return (
        <div>
            <h1> Real Example Ref</h1>
            <hr/>

          { show &&<MultipleCustomHooks/> } 

          <button 
            className='btn btn-outline-primary mt-5'
            onClick= { ()=> {
                setShow( !show );

            }}
          >
              Show/Hide
              </button>

        </div>
    )


}