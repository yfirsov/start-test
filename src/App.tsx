import './App.css';
import { useRef, useState } from 'react';
import { Dot } from './Dot.tsx';
import { useTimer } from './hooks/useTimer.ts';
import { Square } from './Square.tsx';

function App() {
  const { start, timerValue, isRunning } = useTimer(5);
  const firstSquare = useRef(null);
  const secondSquare = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onClick = () => {
    start();
    moveCircle();
    setIsVisible(true);
  };

  const moveCircle = () => {
    const first = firstSquare.current.getBoundingClientRect();
    const second = secondSquare.current.getBoundingClientRect();
    setPosition({
      x: first.x + first.width / 2 - 25,
      y: first.y + first.height / 2 - 25,
    });
  };

  return (
    <>
      <div className="container">
        <Square ref={firstSquare} name="1" animated={true} />
        <Square ref={secondSquare} name="2" />
        {isVisible && <Dot position={position} />}
      </div>
      <div className="card">
        <button onClick={onClick} disabled={isRunning}>
          {isRunning ? timerValue : 'Start'}
        </button>
      </div>
    </>
  );
}

export default App;
