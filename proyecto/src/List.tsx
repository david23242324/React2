import { useState } from "react";

export default function Lista () {
    const [nombres, setNombres] = useState(["Ana", "Mariana", "Carlos", "Daniel"]);

    return (
        <>
        <div>
            <h3>Lista de Nombres</h3>
            <ul>
                {nombres.map((nombre, index) =>( 
                    <li key={index}>{nombre}</li>
                ))}
            </ul>
            <button onClick={() => setNombres(nombres.slice(0, -1))}>
                Eliminar Ultimo
            </button>
        </div>
        </>
    )
}