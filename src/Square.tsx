import { forwardRef } from 'react';

interface SquareProps {
  name: string;
  animated?: boolean;
}

export const Square = forwardRef(
  ({ name, animated = false }: SquareProps, ref) => {
    return (
      <div className={`square ${animated ? 'animated' : ''}`} ref={ref}>
        {name}
      </div>
    );
  },
);
