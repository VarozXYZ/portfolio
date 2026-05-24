import { useMemo, useState } from "react";

type Cell = {
  row: number;
  col: number;
};

type RippleGridProps = {
  rows?: number;
  cols?: number;
};

function distance(a: Cell, b: Cell) {
  return Math.hypot(a.row - b.row, a.col - b.col);
}

export default function RippleGrid({
  rows = 40,
  cols = 28,
}: RippleGridProps) {
  const [clickedCell, setClickedCell] = useState<Cell | null>({
    row: Math.floor(rows / 2),
    col: Math.floor(cols / 2),
  });
  const [rippleKey, setRippleKey] = useState(0);

  const cells = useMemo(
    () =>
      Array.from({ length: rows * cols }, (_, index) => ({
        row: Math.floor(index / cols),
        col: index % cols,
      })),
    [rows, cols],
  );

  function handleCellClick(cell: Cell) {
    setClickedCell(cell);
    setRippleKey((key) => key + 1);
  }

  return (
    <div
      className="ripple-grid"
      style={
        {
          "--cols": cols,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {cells.map((cell) => {
        const delay = clickedCell ? distance(cell, clickedCell) * 80 : 0;

        return (
          <span
            className="ripple-cell"
            key={`${cell.row}-${cell.col}-${rippleKey}`}
            style={
              {
                "--ripple-delay": `${delay}ms`,
              } as React.CSSProperties
            }
            onClick={() => handleCellClick(cell)}
          />
        );
      })}
    </div>
  );
}
