import { useEffect, useState } from 'react'
import './Style.css'
import React from 'react';
import { Bombilla } from './componentes/Bombilla';
import caracteres from './componentes/Caracteres';
import { CaracterFoco } from './componentes/CaracterFoco';
import { PintarBombilla } from './componentes/PintarBombilla';

//Componente principal de la app, ejercicio **marquesina**
export const App =()=> {

  const matrizEspacio = [
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
  ];

  const texto='A';

    // Define el estado para matrizSimbolos
    const [matrizSimbolos2, setMatrizSimbolos2] = useState(["ABCDEF"]);
      
  //console.log(`cadena original "${texto}"; Después de split: "${textoSplit}"`);
  
  // Divide el texto en un arreglo de caracteres (matriz-símbolo 0 1)
  //split toma cada elemento (caracter) del texto y permite hacer una iteración con cada uno de ellos
  
  //nos trae la representación matricial de cada caracter según el mapara de Caracteres
  
  const matrizSimbolos = texto.split("")
  .map((char,index) => {
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


    {/* <PintarBombilla caracter={'⬤'} colorCar={'#0D9A58'} tamano={'25px'} encendido={encender}/>           */}

  
    {/* Sí funciona
    <PintarBombilla caracter={'⬤'} color={'#0D9A58'} tamano={'20px'} encendido={encender}/> 
    */}

{/* {  
  matrizSimbolos && (
    <div> 
      <h1>
        {matrizSimbolos
        .filter((f) => f !== undefined )
        .map((e,cIndex) => (<span key={cIndex}> {e}</span>

          ))}
      </h1>
    </div>
  ) 
} */}


{/* Atención aquí... */}

{matrizSimbolos2.map((car, carIndex) => {
      // Divide el string en un array de caracteres
      const caracteresArray = car.split("");

      // Mapea cada carácter para procesarlo
      return (

          <div key={carIndex} style={{ display: "flex", flexDirection: "row"}} >
            
            {/* Hace un mapeo para iterar sobre cada caracter */}
            {caracteresArray.map((caracter, index) => {
              // Busca la matriz correspondiente al carácter
              const caracterInfo = caracteres.find(
                (c) => c.simbolo === caracter
              );
              // Si no encuentra el carácter, usa el espacio
              const matriz = caracterInfo ? caracterInfo.matriz : matrizEspacio;
              return (
                <div key={index} style={{ marginRight: "30px" }}>
                  {/* <h3>Carácter: {caracter}</h3> */}
                  <div >
                    {matriz.map((fila, filaIndex) => (
                      <div style={{height:"30px", marginTop:"0px", textAlign:'center', alignContent:'center', display:'flex' }}
                         key={filaIndex}>
                        {fila.split("").map((valor, valorIndex) => (                                                   
                          <PintarBombilla encendido={valor==="1"} colorCar={"green"} caracter={'⬤'} tamano={'25px'} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>      );
    })
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
