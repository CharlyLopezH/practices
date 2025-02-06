import React, { useState } from "react";

export const PintarBombilla = ({ encendido, colorCar, caracter, tamano }) => {
  // const onHandleEncendido=()=>{
  //  if (encender==1) { setEncender(0)}
  //  else { setEncender(1) }
  // }

  return (
    <>
<div
      style={{
        marginBottom:"0px",         
        alignItems:"center",  
        marginTop:"0px" ,
        height:"10px",
        display: "inline-block",
        width: tamano,        
        color: colorCar, // 
        //border: "1px solid gray",
        textAlign: "center", // Centrar el carácter
        //lineHeight: "1px", // Alinear verticalmente el carácter
        fontSize: tamano, // Tamaño del carácter
      }}
    >
      {/* Renderizar el carácter solo si está encendido */}
      {encendido && caracter}
    </div>

      {/* <h5>Ejercicio de bombillas</h5>
        {encendido==1 && (
        // <div>            
        //     <p style={{
        //         color:color,
        //         fontSize:tamano,
        //         display: 'inline-block'
        //     }}>
        //     {caracter}
        //     </p>
        // </div>

        )
        } */}
    </>
  );
};

export default PintarBombilla;
