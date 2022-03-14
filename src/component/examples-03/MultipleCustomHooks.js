import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import '../useEffect-02/effects.css';

export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter(1);

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;

    const { data,loading,error } = useFetch(url);

    const { author,quote } = !!data && data[0]; //si existe la data entonces extrae la posicion cero de la data.


    return (
        <div>
            <h1>
                Breaking Bad !!
            </h1>
            <hr/>

            {
                loading
                ?
                (
                    <div className='alert alert-info text-center'>
                        Cargando ...

                     </div>

                )
                :

                (
                    <blockquote className='blockquote text-end'>
                        <p className='mb-0'>
                            { quote }
                        </p>
                        <br/>
                        <footer className='blockquote-footer'>
                            { author }
                        </footer>
                    </blockquote>


                )
            }

            

        <button className='btn btn-info' onClick={ increment }>

            Siguiente Frase

        </button>
        </div>
    )


}