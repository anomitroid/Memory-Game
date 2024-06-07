let grid;

function createGrid (gridContainer, gridSize) {
    const gridSqNumber = gridSize * gridSize;

    for (let i = 0; i < gridSqNumber; i ++) {
        const card = document.createElement ('div');
        card.classList.add ('flip-card');
        card.style.border = '1px solid black';
        card.style.flex = '0 0 calc(100% / ' + gridSize + ')';
        gridContainer.appendChild (card);
    }
}

function initGrid () {
    grid = document.getElementById ('grid'); 
    createGrid (grid, 10);
}

document.addEventListener ('DOMContentLoaded', initGrid);