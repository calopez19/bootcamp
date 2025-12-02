import React from "react";
import '../styles/carta.css'

export function Carta({ icono, numero}) {
  return(
    <>
      <div className={`contenedor-carta ${(icono==='♥' || icono==='♦')? 'rojo': 'negro'}`}>
        <span className="icono left">{icono}</span>
        <h1>{numero}</h1>
        <span className="icono right">{icono}</span>
      </div>
    </>
  )
}
