const intitialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol>
      {intitialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}></li>
      ))}
    </ol>
  );
}
