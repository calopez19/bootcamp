import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Category } from "./components/Category";

function App() {
  const [categories, setcategories] = useState([]); // 1. Estado para los datos
  const [loading, setLoading] = useState(true); // 2. Estado de carga
  const [error, setError] = useState(null); // 3. Estado de error
  const stars = useMemo(() => {
    const layer = [];
    for (let index = 0; index < 200; index++) {
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      // Sintaxis CSS: x-offset y-offset blur color
      layer.push(`${x}vw ${y}vh 0 white`);
    }

    // Retornamos el objeto de estilo con la propiedad correcta (boxShadow)
    return { boxShadow: layer.join(",") };
  }, []);

  useEffect(() => {
    // Definimos la función asíncrona DENTRO del useEffect
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://www.swapi.tech/api");

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        const data = await response.json();
        setcategories(Object.keys(data.result));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Se ejecuta siempre, haya error o éxito
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space">
      <div className="star" style={stars}></div>
      <Navbar />
      <main >
        {categories.map((category, index) => (
          <Category key={index}>{category}</Category>
        ))}
      </main>
    </div>
  );
}

export default App;
