import { useState } from "react";

export default function Estado() {
  const [numero, setNumero] = useState(0);

  return (
    <>
      <div>
        <h3>Contador: {numero}</h3>
        <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
        <button onClick={() => setNumero(numero - 1 )}>Disminuir</button>
        <button onClick={() => setNumero(0)}>Resetear</button>
      </div>
    </>
  )
}