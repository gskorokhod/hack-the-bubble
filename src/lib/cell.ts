import { District } from "./district";
import { GameGrid } from "./grid";
import { GameTile } from "./tile";

interface CellArgs {
    grid: GameGrid;
    row: number;
    col: number;
    height: number;
    width: number;
    district?: District | null;
    approval: number
    type: string
}

export class GameCell {
    readonly grid: GameGrid;
    readonly row: number;
    readonly col: number;
    readonly height: number;
    readonly width: number;
    private _district: District | null = null;
    public approval: number;
    public type: string;

    constructor({ grid, row, col, height, width, district = null, approval, type }: CellArgs) {
        this.grid = grid;
        this.row = row;
        this.col = col;
        this.height = height;
        this.width = width;
        this.district = district;
        this.approval = approval;
        this.type = type;
    }

    get district() {
        return this._district;
    }

    set district(district: District | null) {
        if (this._district) {
            this._district.remove(this);
        }
        this._district = district;
    }

    get tiles(): GameTile[][] {
        const tr = this.row * this.height;
        const tc = this.col * this.width;
        const tiles: GameTile[][] = [];
        for (let roff = 0; roff < this.height; roff++) {
            tiles[roff] = [];
            for (let coff = 0; coff < this.width; coff++) {
                tiles[roff][coff] = this.grid.tiles[tr + roff][tc + coff];
            }
        }
        return tiles;
    }

    public equals(cell: GameCell) {
        return this.row === cell.row && this.col === cell.col;
    }
}