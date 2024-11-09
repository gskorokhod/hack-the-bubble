import { Cell } from "./cell";

export class District {
    private _cells: Cell[];

    constructor(cells: Cell[]) {
        this._cells = cells;
    }

    get cells() {
        return this._cells;
    }

    public add(cell: Cell) {
        if (this.cells.some(c => c.equals(cell))) {
            return;
        }
        this._cells.push(cell);
    }

    public remove(cell: Cell) {
        this._cells = this.cells.filter(c => !c.equals(cell));
    }
}