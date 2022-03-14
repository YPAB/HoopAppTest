import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";
import '../useEffect-02/effects.css';

export const MemoHook = () => {

   const {counter,increment} = useCounter(300);

   const [show,setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter),[counter]);

    return (
        <div>
            <h1>Memo Hooks</h1>
            <h3> Counter : { counter }</h3>
            <hr/>

            <p> { memoProcesoPesado }</p>

            <button
            className= 'btn btn-primary'
            onClick= { increment }
            
            > +1</button>

            <button
                className='btn btn-outline-primary m-lg-3'
                onClick= {() => {
                    setShow( !show );
                }}
            
            >
                Show/HIde {JSON.stringify( show )}
            </button>
        </div>
    )


}