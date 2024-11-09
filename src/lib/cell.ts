import { District } from "./district";
import { Grid } from "./grid";
import { Tile } from "./tile";

interface CellArgs {
    grid: Grid;
    row: number;
    col: number;
    height: number;
    width: number;
    district?: District | null;
}

export class Cell {
    private _district: District | null = null;
    readonly grid: Grid;
    readonly row: number;
    readonly col: number;
    readonly height: number;
    readonly width: number;

    constructor({ grid, row, col, height, width, district = null }: CellArgs) {
        this.grid = grid;
        this.row = row;
        this.col = col;
        this.height = height;
        this.width = width;
        this.district = district;
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

    get tiles(): Tile[][] {
        const tr = this.row * this.height;
        const tc = this.col * this.width;
        const tiles: Tile[][] = [];
        for (let roff = 0; roff < this.height; roff++) {
            tiles[roff] = [];
            for (let coff = 0; coff < this.width; coff++) {
                tiles[roff][coff] = this.grid.tiles[tr + roff][tc + coff];
            }
        }
        return tiles;
    }

    public equals(cell: Cell) {
        return this.row === cell.row && this.col === cell.col;
    }
}