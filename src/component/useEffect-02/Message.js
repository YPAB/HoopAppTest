import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";

export const Message = () => {

    const [coords,setCoords] = useState( { x:0, y:0 } );
    const { x,y } = coords;

    useEffect(() => {
        //console.log('componente montado')

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords( coords );
        }

        window.addEventListener('mousemove',mouseMove);

        return () => {

            window.removeEventListener('mousemove',mouseMove);
            //console.log('componente desmontado')
        }

    }, []);

    return (

        <div>
            <h3>
                Mensajeeee
            </h3>

            <p>
                x: { x } y:{ y }
            </p>
        </div>
    )




}