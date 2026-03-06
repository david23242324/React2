import { useState } from "react";

export default function  Booleano() {
    const [booleano, setBooleano] = useState(true);

    let colorTexto;
    let mensaje;

    if(booleano == true) {
        colorTexto = "blue";
        mensaje = "El Booleano es verdadero"
    } else {
        colorTexto = "red"
        mensaje = "El booleano es falso"
    }

    return(
        <>
            <div>
            <h3 style={{ color : colorTexto }}>{mensaje}</h3>
            <button onClick={() => setBooleano(!booleano)}>
                Cambiar Booleano
            </button>
            </div>
        </>
    );

}