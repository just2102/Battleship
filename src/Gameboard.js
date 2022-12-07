import { cells, currentX, currentY, getCellCoordinates } from "./getCellCoordinates";
import { player1Board } from "./player1Board";
import { Ship } from "./Ship";


class Gameboard {
    constructor(ships = []) {
        this.ships = ships
    }


    createShip(length,currentX,currentY) {
        let newShip = new Ship(length,currentX,currentY)
        this.ships.push(newShip)
    }
}

export {Gameboard}