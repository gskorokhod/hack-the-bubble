import { Grid } from "./grid";

export class Tile {
    img: string;
    readonly row: number;
    readonly col: number;
    readonly grid: Grid;

    constructor(grid: Grid, row: number, col: number, img: string) {
        this.grid = grid;
        this.row = row;
        this.col = col;
        this.img = img;
    }
}