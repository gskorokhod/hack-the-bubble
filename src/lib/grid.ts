import { Cell } from "./cell";

export class Grid {
    cells: Cell[][];
    
    constructor(rows: number, cols: number) {
        this.cells = [];
        for (let i = 0; i < rows; i++) {
            this.cells[i] = [];
            for (let j = 0; j < cols; j++) {
                this.cells[i][j] = new Cell(this, i, j);          
            }
        }
    }

    get rows() {
        return this.cells.length;
    }

    get cols() {
        return this.cells[0].length;
    }
}