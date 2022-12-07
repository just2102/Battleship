import { Gameboard } from './Gameboard'
import { cells, currentX, currentY, getCellCoordinates } from './getCellCoordinates'
import { placeShipSelf } from './placeShipSelf'
import { Ship } from './Ship'
import './style.css'



let playerGameboard = new Gameboard

let placeSelfButton = document.getElementById('place_self')
placeSelfButton.addEventListener('click',placeShipSelf)
//debugging purposes
placeSelfButton.addEventListener('click',() => {
    console.log(playerGameboard)
})
//


let opponentGameboard = new Gameboard;
opponentGameboard.createShip(3)



getCellCoordinates()


export {playerGameboard, opponentGameboard}