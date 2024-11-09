import { GameCell } from "./cell";
import { GameTile } from "./tile";

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

    private generateTiles(rows: number, cols: number, cell_height: number, cell_width: number) {
        for (let row = 0; row < rows * cell_height; row++) {
            this.tiles[row] = [];
            for (let col = 0; col < cols * cell_width; col++) {
                this.tiles[row][col] = new GameTile(this, row, col, "");
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