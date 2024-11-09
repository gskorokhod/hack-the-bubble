import { GameCell } from "./cell";

export class District {
    private _cells: GameCell[];

    constructor(cells: GameCell[]) {
        this._cells = cells;
    }

    get cells() {
        return this._cells;
    }

    public add(cell: GameCell) {
        if (this.cells.some(c => c.equals(cell))) {
            return;
        }
        this._cells.push(cell);
    }

    public remove(cell: GameCell) {
        this._cells = this.cells.filter(c => !c.equals(cell));
    }
}