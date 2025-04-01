import Square from "./Square";

interface BoardProps {
  nSize: number;
}

const Board: React.FC<BoardProps> = ({ nSize }: BoardProps) => {
  const sizeArr = Array.from({ length: nSize }, (_, i) => i + 1);

  const handleSquareClick = (event: React.MouseEvent<HTMLButtonElement>) => {};
  return (
    <>
      <table>
        <tbody>
          {sizeArr.map((_, rowIndex) => (
            <td>
              {sizeArr.map((_, colIndex) => (
                <tr>
                  <Square
                    value={rowIndex + " " + colIndex}
                    onSquareClick={handleSquareClick}
                  />
                </tr>
              ))}
            </td>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Board;
