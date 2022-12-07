function paintShip (length,startCell) {
    if (startCell.classList.contains('filled')) {
        console.log('already filled!')
    } else {
        console.log('not filled yet, filling cell...')    
        startCell.classList.add('filled')
    }
    
}




export {paintShip}