import { CellType, GameCell } from "./cell";
import { GameTile, Tile } from "./tile";
import { weightedRandom } from "./utils";

export class GameGrid {
    private _rows: number;
    private _cols: number;
    tiles: GameTile[][];
    cells: GameCell[][];
    
    constructor(rows: number, cols: number, cell_height: number, cell_width: number) {
        this._rows = rows;
        this._cols = cols;
        this.tiles = [];
        this.cells = [];
        for (let row = 0; row < rows; row++) {
            this.cells[row] = [];
            for (let col = 0; col < cols; col++) {
                const cell = new GameCell({
                    grid: this,
                    row,
                    col,
                    height: cell_height,
                    width: cell_width,
                    approval: Math.random() * (100 - 70) + 70,
                    type: this.cellIsEdge(row, col) ? CellType.WATER : CellType.EMPTY,
                });
                this.cells[row][col] = cell;
            }
        }
        this.generateTiles(rows, cols, cell_height, cell_width);
        this.generateCells(rows, cols);
    }

    public static square(size: number, cell_size: number) {
        return new GameGrid(size, size, cell_size, cell_size);
    }

    public cellIsEdge(row: number, col: number) {
        return row === 0 || col === 0 || row === this.rows - 1 || col === this.cols - 1;
    }

    public tileIsEdge(row: number, col: number) {
        return row === 0 || col === 0 || row === this.tiles.length - 1 || col === this.tiles[0].length - 1;
    }

    public cellExists(row: number, col: number) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    public tileExists(row: number, col: number) {
        return row >= 0 && row < this.tiles.length && col >= 0 && col < this.tiles[0].length;
    }

    private generateTiles(rows: number, cols: number, cell_height: number, cell_width: number) {
        for (let row = 0; row < rows * cell_height; row++) {
            this.tiles[row] = [];
            for (let col = 0; col < cols * cell_width; col++) {
                if (this.tileIsEdge(row, col)) {
                    this.tiles[row][col] = new GameTile(this, row, col, Tile.EMPTY);
                } else {
                    this.tiles[row][col] = new GameTile(this, row, col, Tile.EMPTY);
                }
            }
        }
    }

    private generateCells(rows: number, cols: number) {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                this.cells[row][col].approval = Math.random() * (100 - 70) + 70;
                this.cells[row][col].type = this.chooseCellType(row, col);
            }
        }
    }

    private chooseCellType(row: number, col: number) {
        if (this.cellIsEdge(row, col)) {
            return CellType.WATER;
        }

        const neighbors = this.cells[row][col].getNeighbours(true).filter(c => c !== null);
        if (neighbors.some(c => c.type === CellType.WATER)) {
            return CellType.BEACH;
        }

        const weights = {
            [CellType.URBAN]: neighbors.filter(c => c.type === CellType.URBAN).length + 1,
            [CellType.RURAL]: neighbors.filter(c => c.type === CellType.RURAL || c.type === CellType.URBAN).length + 1,
            [CellType.FOREST]: neighbors.filter(c => c.type === CellType.FOREST || c.type === CellType.RURAL).length + 1,
            [CellType.MEADOW]: neighbors.filter(c => c.type === CellType.MEADOW || c.type === CellType.FOREST || c.type === CellType.RURAL).length + 1,
        }

        console.log(neighbors);

        return weightedRandom(weights);
    }

    get rows() {
        return this._rows;
    }

    get cols() {
        return this._cols;
    }
}