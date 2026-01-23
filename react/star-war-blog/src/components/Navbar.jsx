import "../styles/Navbar.css";
import GreenLaser from '../images/GreenLaser.png'

export function Navbar() {
  return (
    <header>
      <h1>StarWars Blog</h1>
      <img src={GreenLaser} style={{width:'800px', height: '100px'}} />
      <div>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search" height={24} strokeWidth={2} width={24} viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6"/></svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-baseline-density-medium"
            height={24}
            strokeWidth={2}
            width={24}
            viewBox="0 0 24 24"
          >
            <path fill="none" stroke="none" d="M0 0h24v24H0z" />
            <path d="M4 20h16M4 12h16M4 4h16" />
          </svg>
        </button>
      </div>
      <hr style={{"borderTop": "20px solid white"}}/>

    </header>
  );
}
