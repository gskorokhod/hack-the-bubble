import { District } from "./district";
import { Grid } from "./grid";

export class Cell {
    private _district: District | null = null;
    readonly grid: Grid;
    readonly row: number;
    readonly col: number;

    constructor(grid: Grid, row: number, col: number, district: District | null = null) {
        this.grid = grid;
        this.row = row;
        this.col = col;
        this._district = district;
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

    public equals(cell: Cell) {
        return this.row === cell.row && this.col === cell.col;
    }
}