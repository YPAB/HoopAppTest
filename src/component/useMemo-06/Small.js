import React from "react";

export const Small = React.memo(({value}) => {

    return (
        <small> {value} </small>
    )
});


//Memo es para memorizar algo y que solo si sus properties cambian entonces va a volverse a renderizar, caso contrario va usar la version memorizada.