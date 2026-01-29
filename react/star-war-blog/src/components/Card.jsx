import '../styles/Card.css'
import anakin from '../images/1.jpg'
import { useState, useEffect } from 'react';
export function Card({isCharacter,children}) {
  const [characterImage, setcharacterImage] = '';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(isCharacter);
  useEffect({
    if (isCharacter) {
      const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/jsons/.json`)
        if (!response.ok) {          
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();                
        const newcharacterImage = data
        setcharacterImage(newcharacterImage);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Se ejecuta siempre, haya error o éxito
      }
      }
    fetchData();
    }
  },[])

  return (
    <article>
      <div className='containerImg'>
        <img src={anakin} alt=""/>
      </div>
      <span style={{color: 'white'}}>{children}</span>
    </article>
  )
}