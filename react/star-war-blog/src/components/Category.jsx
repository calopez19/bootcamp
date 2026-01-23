import '../styles/Category.css'

export function Category({ children }) {
  return (
    <div className='categories'>
      <h1>{children}</h1>
    </div>
  );
}
