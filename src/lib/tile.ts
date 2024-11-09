import { GameGrid } from "./grid";

export class GameTile {
    img: string;
    readonly row: number;
    readonly col: number;
    readonly grid: GameGrid;

    constructor(grid: GameGrid, row: number, col: number, img: string) {
        this.grid = grid;
        this.row = row;
        this.col = col;
        this.img = img;
    }
}