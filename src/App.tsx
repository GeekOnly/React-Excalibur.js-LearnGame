import './App.css';
import GameCanvas from './components/GameCanvas'; // Import GameCanvas

function App() {
  return (
    <>
      {/* GameCanvas */}
      <div className="game-container">
        <h2>Excalibur.js Game</h2>
        <h6>Hello Sanphet</h6>
        <GameCanvas /> {/* Render GameCanvas */}
      </div>
    </>
  );
}

export default App;
