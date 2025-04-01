export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}

interface SquareProps {
  value: string;
  onSquareClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
