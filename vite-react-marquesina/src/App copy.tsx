import { useEffect, useState } from 'react'
import './Style.css'
import React from 'react';
import { Bombilla } from './componentes/Bombilla';
import caracteres from './componentes/Caracteres';
import { CaracterFoco } from './componentes/CaracterFoco';

//Componente principal de la app, ejercicio simple de pintar un caracter (encender/apagar)
export const App =()=> {
  
    // Obtén el color de fondo del body
    const colorDeFondo = window.getComputedStyle(document.body).backgroundColor;
    //console.log('Pintando color de fondo: '+colorDeFondo);

  return (
    <>
    <div className="class-container bg-light  border-body" data-bs-theme="dark">           
     <h3>Pintando una bombilla</h3>
     <p className='code mb-1'>Ejercicio Simple</p> 
     <hr className='mt-0'/>   
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>  
     <CaracterFoco caracter={'⬤'} color={'#0D9A58'} tamano={'40px'} encendido={1} backgroundColor={colorDeFondo}/>
    </div>
    </>
  );
}

export default App
