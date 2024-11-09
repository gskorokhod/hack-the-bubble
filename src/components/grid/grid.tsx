export interface GridProps {
    rows: number;
    cols: number;
}

export default function Grid(props: GridProps) {
  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: `repeat(${props.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  };
  return (
    <div style={style}>
    </div>
  );
}