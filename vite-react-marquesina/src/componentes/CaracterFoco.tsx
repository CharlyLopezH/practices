//Devuelve un símbolo para pintar un foco
import React from "react"


export const CaracterFoco=({encendido, color, caracter, tamano, backgroundColor})=>{


    console.log(`Encendido: ${encendido} 'color del backGround: '${backgroundColor}`);


    if (encendido!) {
        console.log('Apagar foco (pintar del color del background)');
    }

    return(
    <>
    <div 
    
    style={{
        //Si el valor del encendido es 1, usar el color que viene en el parametro; de lo contrario asignar el color al background
        color:encendido ? color : backgroundColor, 
        fontSize:tamano        
    }}>
     {caracter}
    </div>
    </>
    )
}


