import { useState, type ChangeEvent } from "react";

type Usuario = {
    nombre: string;
    edad: number;
};

export default function Objeto() {
    const [usuario, setUsuario] = useState<Usuario>({
        nombre: "Barca",
        edad: 25
    });

    function manejarCambio(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setUsuario({
            ...usuario,
            [name]: name === "edad" ? Number(value) : value,
        });
    }

    return (
        <div>
            <h3>Nombre: {usuario.nombre}</h3>
            <h3>Edad: {usuario.edad}</h3>

            <input
                type="text"
                name="nombre"
                value={usuario.nombre}
                onChange={manejarCambio}
            />

            <input
                type="number"
                name="edad"
                value={usuario.edad}
                onChange={manejarCambio}
            />
        </div>
    );
}