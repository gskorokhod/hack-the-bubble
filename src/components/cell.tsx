import { Cell as CellObj } from "@/lib/cell";
import { randomColor } from "@/lib/utils";
// import Image from 'next/image';

export default function Cell(cell: CellObj) {
    const style: React.CSSProperties = {
        display: "grid",
        gridTemplateRows: `repeat(${cell.height}, 1fr)`,
        gridTemplateColumns: `repeat(${cell.width}, 1fr)`,
    };
  return (
    <div style={style}>
        {
            cell.tiles.map((row, ridx) => (
                row.map((tile, cidx) => {
                    const key = `${cell.row}-${cell.col}-${ridx}-${cidx}`;
                    // return (
                    //     <Image
                    //         key={key}
                    //         src={`/tiles/${tile.img}.png`}
                    //         alt={tile.img}
                    //         width={32}
                    //         height={32}
                    //     />
                    // )
                    return (
                        <div key={key} style={{width: "32px", height: "32px", backgroundColor: randomColor().hex()}}></div>
                    )
                })
            ))
        }
    </div>
  );
}