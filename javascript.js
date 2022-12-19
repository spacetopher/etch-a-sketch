const grid = document.querySelector('.grid');
const container = document.querySelector('.container');

const btn = document.querySelector('.popup');
let quantity = 16;
container.appendChild(grid);


function loadGrid() {
const quantity = Number(prompt("How many squares do you want per side?", "1 - 100 squares")
);
if (quantity < 1 || quantity > 100 || quantity == '' || quantity == "1 - 100 squares")  loadGrid();
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

function removeAllChildNodes() {
    if (grid.childElementCount > 0) {
        grid.removeChild(square);
    }
}

btn.addEventListener('click', () => {
    while (container.childElementCount > 0) {
        container.removeChild(container.firstChild);
    };
    loadGrid();
});

for (let i = 0; i < quantity ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    grid.setAttribute('style', `grid-template-columns: repeat(${quantity},1fr); grid-template-rows: repeat(${quantity},1fr)`);
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'yellow'
    });


};
console.log(container.firstElementChild);

/*
id gridOrig/gridMod

function loadGrid() {
    var divs = document.getElementsByTagName('div');
    for(var i = divs.length; i-- ;) {
        var div = divs[i];
        if(div.className === 'response') {
            div.style.display = 'none';
        }
    }
}
if grid == undefined (would indicate grid not in place)
if no grid no squares
else if grid
what is the condition for running prompt? after initial grid button is pressed
special ID 1 for first grid load
special ID 2 for prompted grid loads
if DIV has special ID 1, don't run prompt
if DIV has special ID 2, run prompt
ideas---
-switch between css files, toggle css selectors
-removechild not working because parent-child relationships are in diff scopes (global vs function)
-2 similar functions, 1 to load beginning page, 1 to load after prompt 
-need to include function to remove squares and create grid in same function    
-node 'square' not being recognized as a child of 'grid'
-try creating everything inside function
-try with adding all divs in html doc


Array.from(grid).forEach(square => {
        Array.from(grid).removeChild(square);
    });
1. page load with loadGrid();
2. click button 
    -removeSquare();
    -getQuantity() (include loadGrid());
3. input number of squares
4. 
const quantity = () => {
    Number(prompt("How many squares do you want per side?", "1 - 100 squares")
    );
    
    for (let i = 1; i <= quantity ** 2; i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
    gridArray.setAttribute('style', `grid-template-columns: repeat(${quantity},1fr); grid-template-rows: repeat(${quantity},1fr)`);
    }
    
};

let gridSquares = 16;

WHEN PAGE LOADS...
for (let i = 1; i <= gridSquares**2; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'yellow'
    });
};

FUNCTION WHEN BUTTON CLICKED...
btn.addEventListener('click', () => {
    gridArray.forEach(square => {
            grid.removeChild(square);
        });
    const quantity = Number(prompt("How many squares do you want?", ""));
    for (let i = 1; i <= quantity ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    grid.setAttribute('style', `grid-template-columns: repeat(${quantity},1fr); grid-template-rows: repeat(${quantity},1fr)`);
    }
});




Create a webpage with a 16x16 grid of square divs.

Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!

It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).

There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
float/clear
inline-block
flexbox
CSS Grid

Be careful with borders and margins, as they can adjust the size of the squares!

“OMG, why isn’t my grid being created???”

Did you link your CSS stylesheet?

Open your browser’s developer tools.

Check if there are any errors in the JavaScript console.

Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.

Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.

Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.

There are multiple ways to change the color of the divs, including:
adding a new class to the div.
changing the div’s background color using JavaScript.

Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.

You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

*/