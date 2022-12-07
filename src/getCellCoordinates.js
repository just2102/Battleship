let cells = document.querySelectorAll('.battlefield-cell-content')
let currentX;
let currentY;
function getCellCoordinates() {
    cells.forEach(cell => {
    cell.addEventListener('click', function handleClick(event) {
        currentX = cell.getAttribute("data-x");
        currentY = cell.getAttribute("data-y");
        console.log('data-x: '+ currentX)
        console.log('data-y:' + currentY)
    })
})

}


export {cells, currentX, currentY, getCellCoordinates}