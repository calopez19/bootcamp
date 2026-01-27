import '../styles/Card.css'
import anakin from '../images/1.jpg'
export function Card() {
  return (
    <article>
      <div className='containerImg'>
        <img src={anakin} alt=""/>
      </div>
    </article>
  )
}