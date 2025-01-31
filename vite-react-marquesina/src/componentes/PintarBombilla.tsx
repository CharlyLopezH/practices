import React, { useState } from 'react';

export const PintarBombilla=({encendido, color, caracter, tamano})=>{
   


    // const onHandleEncendido=()=>{        
    //  if (encender==1) { setEncender(0)} 
    //  else { setEncender(1) }
    // }


    return(
        <>
        <h5>Ejercicio de bombillas</h5>


        {encendido==1 && (

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