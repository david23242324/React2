import { useState } from "react";

export default function Texto() {
    const [texto, setTexto] = useState("Barca");
    return (
        <>
        <div>
            <h3>{texto}</h3>
            <input type="text"
            onChange={(e) => setTexto(e.target.value)} 
            />
        </div>
        </>
    )
}