import { GameCell } from "./cell";

export class District {
    private _cells: GameCell[];
    private _approval: number;


    constructor(cells: GameCell[]) {
        this._cells = cells;
        this._approval = this.findApproval(cells);
    }

    get cells() {
        return this._cells;
    }

    public findApproval(cells: GameCell[]) {
        const len = cells.length;
        let sum = 0;
        for (let i = 0; i < len; i++) {
            sum += cells[i].approval;
        }
        return (sum/len)
    }

    public add(cell: GameCell) {
        if (this.cells.some(c => c.equals(cell))) {
            return;
        }
        this._cells.push(cell);
        this.moreCellsApproval(cell.approval);
    }

    public remove(cell: GameCell) {
        this._cells = this.cells.filter(c => !c.equals(cell));
        this.lessCellsApproval(cell.approval);
    }

    public moreCellsApproval(cApproval: number) {
        const len = this._cells.length;
        this._approval = ((this._approval*len)+cApproval)/len+1
    }

    public lessCellsApproval(cApproval: number) {
        const len = this._cells.length;
        this._approval = ((this._approval*len)-cApproval)/len-1
    }
}