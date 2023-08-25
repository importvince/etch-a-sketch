//RAINBOX WORKING. STILL NEED SHADED. 

const changeSize = document.getElementById('change-size');
const rainbow =  document.getElementById('rainbow');
const shade =  document.getElementById('shade');
const tileContainer = document.getElementById('tile-container');
const style = document.createElement('style');

let input;
let size;

startingBoard();
function startingBoard() {
    style.innerHTML = `
    #tile-container {
        grid-template-columns: repeat(16, 1fr);
        grid-template-rows: repeat(16, 1fr);
    }`
    document.head.appendChild(style);
    for (let i=0; i< 256; i++) {
        const newDiv = document.createElement('div');
        tileContainer.appendChild(newDiv);
        newDiv.addEventListener('mouseenter', () => {
            let random = generateRandomColor();
            newDiv.style.backgroundColor = `${random}`;
        })
        console.log(newDiv);
}}

function wipeStartingBoard() {
    style.remove();
    while (tileContainer.firstChild) {
        tileContainer.removeChild(tileContainer.firstChild);
    }
}

//change board size
changeSize.addEventListener('click', async () => {
    input = change();
    size = board();
    createBoard();
})

function change() {
    const userInput = prompt('Enter a number 1-100:');
    if (userInput) {
        return userInput;
    } return 16;
}

function board() {
    const boardSize = parseInt(input) * parseInt(input);
    return boardSize;
}

function createBoard() {
    wipeStartingBoard();
    const style = document.createElement('style');
    style.innerHTML = `
    #tile-container {
        grid-template-columns: repeat(${input}, 1fr);
        grid-template-rows: repeat(${input}, 1fr);
    }`
    document.head.appendChild(style);
    for (let i=0; i< size; i++) {
        const newDiv = document.createElement('div');
        tileContainer.appendChild(newDiv);
        newDiv.addEventListener('mouseenter', () => {
            let random = generateRandomColor();
            newDiv.style.backgroundColor = `${random}`;
        })
        console.log(newDiv);
    }   
}

function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

