import '../styles/Category.css'
import { Card } from './Card';

export function Category({ children }) {
  return (
    <div className='categories'>
      <h1>{children.toUpperCase()}</h1>
      <div className='cardContainer'>
        {[1,2,3,4,5,6,7 ,8 ,9, 10].map((number) => {
        return (
          <Card key={number}> </Card>
        )
      })}
      </div>
    </div>
  );
}
