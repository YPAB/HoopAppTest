import React, { useState } from "react";
import '../useEffect-02/effects.css';


export const ShowIncrement = React.memo(({increment}) => {

    return (
        <div>
            <button
                className='btn btn-primary'
                onClick= {() => {
                    increment();
                }}
            
            >
            Incrementar
            </button>

        </div>
    )


});