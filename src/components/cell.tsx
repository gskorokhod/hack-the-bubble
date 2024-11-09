import { Cell as CellObj } from "@/lib/cell";

export default function Cell(cell: CellObj) {
    const style: React.CSSProperties = {
        display: "grid",
        gridTemplateRows: `repeat(${cell.height}, 1fr)`,
        gridTemplateColumns: `repeat(${cell.width}, 1fr)`,
    };
  return (
    <div style={style}>
        
    </div>
  );
}