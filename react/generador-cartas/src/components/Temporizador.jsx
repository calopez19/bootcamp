import '../styles/temporizador.css'
export function Temporizador({time}) {

  return (
    <div className="countdown">
      {time}
    </div>
  );
}