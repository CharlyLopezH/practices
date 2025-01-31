import { useState } from 'react'
import './App.css'
import React from 'react';
import { Bombilla } from './componentes/Bombilla';
import caracteres from './componentes/Caracteres';


//Componente principal de la app
export const App =()=> {
  
    // Buscar la letra "A" como ejemplo
    const letra = caracteres.find((caracter) => caracter.simbolo === "B");

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>      
      {letra && (
        <div>
          {letra.matriz.map((fila, index) => (
            // <div key={index}>{fila.replace(/0/g, " ").replace(/1/g, "⬤")}</div>
            <div key={index} style={{ display: "flex" }}>
            {/* Encendemos las bombillas según la letra */}
            {fila.split("").map((bit, colIndex) => (
              <Bombilla key={colIndex} encendida={bit === "1"} />
            ))}
          </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App
