import { useEffect, useState } from 'react'
import './Style.css'
import React from 'react';
import { Bombilla } from './componentes/Bombilla';
import caracteres from './componentes/Caracteres';
import { CaracterFoco } from './componentes/CaracterFoco';
import { PintarBombilla } from './componentes/PintarBombilla';

//Componente principal de la app, ejercicio 
export const App =()=> {
  
  return (
    <>
    <div className="class-container bg-light  border-body" data-bs-theme="dark">           
     <h3>Pintando una bombilla</h3>
     <p className='code mb-1'>Ejercicio de Pintar una bombilla</p> 
     <hr className='mt-0'/>   
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>  
     <PintarBombilla caracter={'⬤'} color={'#0D9A58'} tamano={'20px'} encendido={0}/>
    </div>
    </>
  );
}

export default App
