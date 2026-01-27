import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Category } from "./components/Category";
import { useStar } from "./hooks/useStar";

function App() {
  const [categories, setcategories] = useState([]); // 1. Estado para los datos
  const [loading, setLoading] = useState(true); // 2. Estado de carga
  const [error, setError] = useState(null); // 3. Estado de error  
  useEffect(() => {
    // Definimos la función asíncrona DENTRO del useEffect
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("src/jsons/api.json");
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
      <div className="star" style={useStar({duration:80, size:1, quantity:200})}></div>
      <div className="star" style={useStar({duration:40, size:2, quantity:100})}></div>
      <div className="star" style={useStar({duration:20, size:4, quantity:50})}></div>
      <Navbar />
      <main>
        {categories.map((category, index) => (
          <Category key={index}>{category}</Category>
        ))}
      </main>
    </div>
  );
}

export default App;


newFavorite[page] = newFavorite[page]