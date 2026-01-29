import { useState,useEffect, Children } from 'react';
import '../styles/Category.css'
import { Card } from './Card';

export function Category({ children }) {
  const [categoriesElements, setCategoriesElements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 3. Estado de error  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/jsons/${children}.json`)
        if (!response.ok) {          
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();                
        const newcategoriesElements = [...categoriesElements, data.results? data.results: data.result]
        setCategoriesElements(newcategoriesElements);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Se ejecuta siempre, haya error o éxito
      }
      }
    fetchData();
    }
  ,[])

  return (
    <>
      {loading? <h1>Cargando</h1>:
      <div className='categories'>
      <h1>{children.toUpperCase()}</h1>
      <div className='cardContainer'>
        {categoriesElements[0].map((element,index) => {               
        const id = element.name? element.name: element.properties.title       
        return (
          <Card key={id} isCharacter={(children==='people')}>{id}</Card>
        )
      })}
      </div>
    </div>}
    </>
    
  );
}
