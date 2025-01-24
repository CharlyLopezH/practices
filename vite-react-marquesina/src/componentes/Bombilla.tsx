import React from "react";

export const Bombilla = ({ encendida }: { encendida: boolean }) => {
    return (
      <>
      <div
        className={`bombilla ${encendida ? "encendida" : ""}`}
        style={{
          width: "20px",
          height: "20px",
          margin: "2px",
          backgroundColor: encendida ? "yellow" : "black",
          borderRadius: "50%",
        }}
        >          
        </div>
      </>
    );
  };