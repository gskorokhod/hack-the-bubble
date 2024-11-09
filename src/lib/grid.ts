import { CellType, GameCell } from "./cell";
import { GameTile, Tile } from "./tile";

export class GameGrid {
    tiles: GameTile[][];
    cells: GameCell[][];
    
    constructor(rows: number, cols: number, cell_height: number, cell_width: number) {
        this.tiles = [];
        this.cells = [];
        this.generateTiles(rows, cols, cell_height, cell_width);
        this.generateCells(rows, cols, cell_height, cell_width);
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

    private generateCells(rows: number, cols: number, cell_height: number, cell_width: number) {
        for (let row = 0; row < rows; row++) {
            this.cells[row] = [];
            for (let col = 0; col < cols; col++) {
                this.cells[row][col] = new GameCell({
                    grid: this,
                    row,
                    col,
                    height: cell_height,
                    width: cell_width,
                    approval: Math.random() * (100 - 70) + 70,
                    type: this.cellIsEdge(row, col) ? CellType.WATER : CellType.EMPTY,
                });
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