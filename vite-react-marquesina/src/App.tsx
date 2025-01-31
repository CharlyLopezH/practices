import { useEffect, useState } from 'react'
import './Style.css'
import React from 'react';
import { Bombilla } from './componentes/Bombilla';
import caracteres from './componentes/Caracteres';
import { CaracterFoco } from './componentes/CaracterFoco';
import { PintarBombilla } from './componentes/PintarBombilla';

//Componente principal de la app, ejercicio **marquesina**
export const App =()=> {

  const texto='A';
  
  //console.log(`cadena original "${texto}"; Después de split: "${textoSplit}"`);
  
  // Divide el texto en un arreglo de caracteres (matriz-símbolo 0 1)
  //split toma cada elemento (caracter) del texto y permite hacer una iteración con cada uno de ellos
  
  //nos trae la representación matricial de cada caracter según el mapara de Caracteres
  const matrizSimbolos = texto.split("").map((char) => {
    const charFind= caracteres.find((ch) => ch.simbolo === char);

    if (charFind) {
      
      console.log(`${charFind?.simbolo}--> su representación: ${charFind?.matriz}`);      
      
      charFind.matriz.forEach((fila, filaIdx)=>{        
        console.log(`fila** ${filaIdx}, ${fila} `);

        const filaSplit = fila.split("");
        console.log(`Splited: ${filaSplit}`);
        

        filaSplit.forEach((dato,datoIdx)=> {
          if (dato=='0') {
          console.log('Cero');
          } else if(dato=='1') {
          console.log('Uno');  
          }
        }
        );


      });            
    }
    
  })
  
  //matrizSimbolos.map((chr)=>console.log(`Char: ${chr?.simbolo}, su Matriz:${chr?.matriz}`));

  //matrizSimbolos.forEach((obj, index) => console.log(`Índice ${index}:`, obj));
  
  //Prende y apaga el foco
  const [encender, setEncender]=useState(1);
      
  const onHandleEncendido = () => {
        setEncender(encender === 1 ? 0 : 1);
    }


  return (
    <>

    <div className="class-container bg-light  border-body" data-bs-theme="dark">           
     <h3>Pintando una serie de bombillas</h3>
     <p className='code mb-1'>Ejercicio de Pintar una matriz de bombillas</p> 
     <hr className='mt-0'/>        
    </div>

    <button className='btn btn-primary' onClick={onHandleEncendido}>
        Encender/apagar
    </button>


    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>  


    <PintarBombilla caracter={'⬤'} color={'#0D9A58'} tamano={'20px'} encendido={encender}/>          

  
    {/* Sí funciona
    <PintarBombilla caracter={'⬤'} color={'#0D9A58'} tamano={'20px'} encendido={encender}/> 
    */}

    {
      //matrizSimbolos.filter((c)=>c!==undefined).map((ch,chIx)=>({})
    }

    {/* Código para observar el interior de una matriz */}

    {/* { matrizSimbolos
    .filter((caracter) => caracter !== undefined)
    .map((caracter, index)=>(
              <div key={index} className="caracter">
              {caracter.matriz.map((fila, rowIndex) => (
                <div key={rowIndex} className="fila">
                  {fila.split("").map((bit, colIndex) => (
                    <PintarBombilla caracter={'⬤'} color={'#0D9A58'} tamano={'20px'} encendido={bit==="1"}/>                    
                  ))}
                </div>
              ))}
            </div>
    ))
    } */}
    
    </div>
    <hr/>
    </>
  );
}

export default App
