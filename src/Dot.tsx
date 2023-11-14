interface DotProps {
  position: {
    x: number;
    y: number;
  };
}

export const Dot = ({ position }: DotProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'greenyellow',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: 0,
        top: 0,
        width: 50,
        height: 50,
      }}
    />
  );
};
