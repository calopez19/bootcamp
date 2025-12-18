import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [start, setstart] = useState(false);
  const [time, setTime] = useState(0);
  const [funcion, setFuncion] = useState('temporizador')
  useEffect(() => {
    let moreTime;
    if (start) {
      if (funcion === 'temporizador') {
        moreTime = setTimeout(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
        
      } else {
        moreTime = setTimeout(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
        
      }
    }

    return () => {
      clearTimeout(moreTime);
    };
  }, [time, start]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let valor = event.target.algo.value;
    console.log(valor);
    const valorNum = parseInt(valor)
    console.log(valorNum);
    
    if (!isNaN(valorNum)) {
      console.log('paso');
      event.target.algo.value = ''
    }
  };
  return (
    <>
      <h1>{time}</h1>
      <button
        disabled={start}
        onClick={() => {
          setstart(true);
        }}
      >
        empezar temporizador
      </button>
      <button onClick={() => setstart(false)}>Detener</button>
      <button
        onClick={() => {
          setTime(0);
        }}
      >
        reset temporizador
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="algo" maxLength={4}/>
        <button type="submit">subir</button>
      </form>
    </>
  );
}

export default App;
