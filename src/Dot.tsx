import { ForwardedRef, forwardRef } from 'react';

export interface Dot {
  x: number;
  y: number;
}

interface DotProps {
  position: Dot;
}

export const Dot = forwardRef(
  ({ position }: DotProps, ref: ForwardedRef<HTMLDivElement | null>) => {
    return (
      <div
        ref={ref}
        style={{
          position: 'absolute',
          backgroundColor: 'greenyellow',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 2s',
          pointerEvents: 'none',
          left: 0,
          top: 0,
          width: 50,
          height: 50,
        }}
      />
    );
  },
);
