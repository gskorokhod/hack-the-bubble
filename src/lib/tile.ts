import { GameGrid } from "./grid";

export enum Tile {
    EMPTY = "empty",
    CITY = "city",
    HOUSE = "house",
    TREE = "tree",
    TANK = "tank",
    POND_TL = "pond_tl",
    POND_TR = "pond_tr",
    POND_BL = "pond_bl",
    POND_BR = "pond_br",
    PALMS = "palms",
    BEACH1 = "beach1",
}


export class GameTile {
    type: Tile;
    readonly row: number;
    readonly col: number;
    readonly grid: GameGrid;

    constructor(grid: GameGrid, row: number, col: number, type: Tile) {
        this.grid = grid;
        this.row = row;
        this.col = col;
        this.type = type;
    }

    
}