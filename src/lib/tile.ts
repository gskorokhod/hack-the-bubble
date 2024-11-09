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

    get img() {
        return `${this.type}.png`;
    }

    get isEdge() {
        return this.row === 0 || this.col === 0 || this.row === this.grid.tiles.length - 1 || this.col === this.grid.tiles[0].length - 1;
    }

    public equals(tile: GameTile) {
        return this.row === tile.row && this.col === tile.col;
    }

    public getNeighbors(diagonal: boolean = false): GameTile[] {
        const neighbors: GameTile[] = [];
        const { row, col } = this;
        const positions = [
            [row - 1, col],
            [row + 1, col],
            [row, col - 1],
            [row, col + 1],
        ];
        if (diagonal) {
            positions.push([row - 1, col - 1]);
            positions.push([row - 1, col + 1]);
            positions.push([row + 1, col - 1]);
            positions.push([row + 1, col + 1]);
        }

        for (const [r, c] of positions) {
            if (this.grid.tileExists(r, c)) {
                neighbors.push(this.grid.tiles[r][c]);
            }
        }
        return neighbors;
    }
}