import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Button } from './Button.tsx';
import { Dot } from './Dot.tsx';
import { useTimer } from './hooks/useTimer.ts';
import { Square } from './Square.tsx';

function App() {
  const { start, timerValue, isRunning } = useTimer(5);
  const firstSquare = useRef(null);
  const secondSquare = useRef(null);
  const dotRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonValue = isRunning ? timerValue : 'Start';

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
    requestAnimationFrame(() => {
      setPosition({
        x: second.x + second.width / 2 - 25,
        y: second.y + second.height / 2 - 25,
      });
    });
  };

  const onResize = () => {
    const second = secondSquare.current.getBoundingClientRect();
    setPosition({
      x: second.x + second.width / 2 - 25,
      y: second.y + second.height / 2 - 25,
    });
  };
  const onTransitionEnd = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    dotRef.current.addEventListener('transitionend', onTransitionEnd);
  }, [isVisible]);

  return (
    <>
      <div className="container">
        <Square ref={firstSquare} name="1" animated={true} />
        <Square ref={secondSquare} name="2" />
        {isVisible && <Dot position={position} ref={dotRef} />}
      </div>
      <div className="card">
        <Button
          onClick={onClick}
          disabled={isRunning}
          value={buttonValue.toString()}
        />
      </div>
    </>
  );
}

export default App;
