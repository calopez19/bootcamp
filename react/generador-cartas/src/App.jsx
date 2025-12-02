import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import { Carta } from "./components/Carta.jsx";
import {NUMEROS, ICONOS} from './constants.js';
import { Temporizador } from "./components/Temporizador.jsx";

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(1)
  const [icon, setIcon] = useState('heart')
  const [time, setTime] = useState(10)

  useEffect(() => {
    // Configura un intervalo que se ejecuta cada 1000 milisegundos (1 segundo)
    const interval = setInterval(() => {
      setTime(prevtime => prevtime - 1);
    }, 1000);

    // La función de limpieza se ejecuta cuando el componente se desmonta
    // o antes de que el efecto se ejecute de nuevo (si las dependencias cambian).
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) {
      handleClick();
    }
  }, [time]);

  const changeCard = () => {
    let  indiceNumero = Math.floor(Math.random() * NUMEROS.length);
    let indiceIcono = Math.floor(Math.random() * ICONOS.length);
    setIcon(ICONOS[indiceIcono])
    setNumber(NUMEROS[indiceNumero])
    setCount(count + 1)
  }
  const handleClick = () => {
    
    let newTime = 10;
    setTime(newTime);
    changeCard();
  }
  return (
    <>
      <div>
        <Carta
        numero={number}
        icono={icon}
        ></Carta>
      </div>
      <div className="card">
        <button onClick={handleClick}>
          contador {count}
        </button>
        <Temporizador time={time}></Temporizador>
      </div>
    </>
  )
}

export default App
