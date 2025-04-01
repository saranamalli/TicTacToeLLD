import Board from "./Board";

export default function TicTacToe() {
  return (
    <>
      <div className="container bg-success">
        <Board nSize={5} />
      </div>
    </>
  );
}
