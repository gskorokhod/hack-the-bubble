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
    border: "2px solid black",
  };
  return (
    <div style={style}>
      {props.grid.cells.map((row, ridx) => (
        row.map((cell, cidx) => {
          const key = `${ridx}-${cidx}`;
          const style: React.CSSProperties = {
            gridRow: ridx + 1,
            gridColumn: cidx + 1,
          };
          return (
            <Cell key={key} cell={cell} style={style}/>
          );
        })
      ))}
    </div>
  );
}