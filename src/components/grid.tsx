import { GameGrid } from "@/lib/grid";
import Cell from "./cell";

export interface GridProps {
  grid: GameGrid;
}

export default function Grid(props: GridProps) {
  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: `repeat(${props.grid.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${props.grid.cells}, 1fr)`,
  };
  return (
    <div style={style}>
      {props.grid.cells.map((row, ridx) => (
        row.map((cell, cidx) => {
          const key = `${ridx}-${cidx}`;
          return (
            <Cell key={key} cell={cell} />
          );
        })
      ))}
    </div>
  );
}