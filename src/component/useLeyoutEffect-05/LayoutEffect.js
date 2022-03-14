import React, { useLayoutEffect,useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import './Layout.css';

export const LayoutEffect = () => {
    const {counter,increment} = useCounter(1);

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;

    const { data,error } = useFetch(url);

    const { quote } = !!data && data[0]; //si existe la data entonces extrae la posicion cero de la data.

    const pTag =  useRef();

    const [boxSize,setBoxSize] = useState({});

    useLayoutEffect( () => {

        setBoxSize( pTag.current.getBoundingClientRect() ); //Pra sacar la dimenciones de un div

    },[quote])
       
    
    return (
            <div>
                <h1>
                    Layout Effect !!
                </h1>
                <hr/>
    
                        <blockquote className='blockquote text-end'>
                            <p 
                            className='mb-0'
                            ref={ pTag }
                            >
                                { quote }
                            </p>
                            <br/>
                        </blockquote>

            <pre>
                { JSON.stringify( boxSize,null,3 ) }
            </pre>
    
            <button className='btn btn-info' onClick={ increment }>
    
                Siguiente Frase
    
            </button>
            </div>
    )


}