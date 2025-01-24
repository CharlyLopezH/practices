import React, { useState } from 'react';

export const PintarBombilla=({encendido, color, caracter, tamano})=>{
   
    const [encender, setEncender]=useState(encendido);

    // const onHandleEncendido=()=>{        
    //  if (encender==1) { setEncender(0)} 
    //  else { setEncender(1) }
    // }

    //Prende y apaga el foco
    const onHandleEncendido = () => {
        setEncender(encender === 1 ? 0 : 1);
    }


    return(
        <>
        <h5>Ejercicio de bombillas</h5>
        <button className='btn btn-primary' onClick={onHandleEncendido}>
        Encender/apagar
        </button>

        {encender==1 && (

        <div>            
            <p style={{
                color:color,
                fontSize:tamano
            }}>
            {caracter}
            </p>
        </div>

        )
        }
        </>
    )
}

export default PintarBombilla