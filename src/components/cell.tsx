import { GameCell } from "@/lib/cell";
import { randomColor } from "@/lib/utils";
// import Image from 'next/image';

interface CellProps {
    cell: GameCell;
    style: React.CSSProperties;
}

export default function Cell({ cell, style }: CellProps) {
    const _style: React.CSSProperties = {
        display: "grid",
        gridTemplateRows: `repeat(${cell.height}, 1fr)`,
        gridTemplateColumns: `repeat(${cell.width}, 1fr)`,
        border: "2px solid black",
        ...style,
    };
    return (
        <div style={_style}>
            {
                cell.tiles.map((row, ridx) => (
                    row.map((tile, cidx) => {
                        const key = `${cell.row}-${cell.col}-${ridx}-${cidx}`;
                        const style: React.CSSProperties = {
                            width: "32px",
                            height: "32px",
                            backgroundColor: randomColor().hex(),
                            gridRow: ridx + 1,
                            gridColumn: cidx + 1,
                        };
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
                            <div key={key} style={style}></div>
                        )
                    })
                ))
            }
        </div>
    );
}