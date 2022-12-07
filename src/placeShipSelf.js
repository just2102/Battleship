import { playerGameboard } from "."
import { paintShip } from "./paintShip"


let placeSelfButton = document.getElementById('place_self')
function placeShipSelf(randomLength) {
    randomLength = Math.floor(Math.random()*4)+1  
    let x = Math.floor(Math.random()*9)
    let y = Math.floor(Math.random()*9)

    // get start cell to paint ship in DOM
    let startCell = document.querySelector(`[data-x='${x}'][data-y='${y}']`)
    //check if start cell is empty or not. if empty, paint ship in DOM and create new ship on the gameboard
    if (startCell.classList.contains('filled')) {
        return 0
    } else {     
        playerGameboard.createShip(randomLength,x,y)
        paintShip(randomLength,startCell)
    }

}


export {placeSelfButton, placeShipSelf}