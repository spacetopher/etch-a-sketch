const grid = document.querySelector('.grid');
const container = document.querySelector('.container');
const btn = document.querySelector('.popup');
const quantity = 16;

function loadGrid() {
    const quantity = Number(prompt("Please choose the number of squares per side between 1 and 100.")
    );
    if (quantity < 1 || quantity > 100 || quantity === '') { 
        return loadGrid();
    };
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
    for (let i = 0; i < quantity ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        grid.setAttribute('style', `grid-template-columns: repeat(${quantity},1fr); grid-template-rows: repeat(${quantity},1fr)`);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'yellow'
        });
    };
};

btn.addEventListener('click', () => {
    while (container.childElementCount > 0) {
        container.removeChild(container.firstChild);
    };
    loadGrid();
});

container.appendChild(grid);

for (let i = 0; i < quantity ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    grid.setAttribute('style', `grid-template-columns: repeat(${quantity},1fr); grid-template-rows: repeat(${quantity},1fr)`);
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'yellow'
    });
};