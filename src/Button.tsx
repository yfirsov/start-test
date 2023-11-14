interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  value: string;
}

export const Button = ({ onClick, disabled, value }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};
