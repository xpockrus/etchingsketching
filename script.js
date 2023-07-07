const newGrid = document.querySelector("#newGrid");
const resetGrid = document.querySelector("#resetGrid");
const randomBtn = document.querySelector("#random");

function createGrid(size) {
    let container = document.querySelector("#container");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let sizeSquared = size * size
    for (i = 0; i < sizeSquared; i++) {
        let square = document.createElement("div")
        square.classList.add("changed");
        container.appendChild(square);
    }
    colorRed()
}

createGrid(16);
function colorRed() {
    let tiles = document.querySelectorAll(".changed");
    tiles.forEach((tile) => {
        tile.addEventListener("mouseover", colorSquare);
    })
}

function colorSquare() {
    this.style.backgroundColor = "red"
}

function randomInteger(max) {
    return ~~(Math.random() * (max +1));
}


function randomColor() {
    let tiles = document.querySelectorAll(".changed");
    tiles.forEach((tile) => {
        tile.addEventListener("mouseover", () => {
            let r = randomInteger(255);
            let g = randomInteger(255);
            let b = randomInteger(255);
            let randomColor = `rgb(${r}, ${g}, ${b})`;
            tile.style.backgroundColor = randomColor;
        })
    })
}

randomBtn.addEventListener("click", () => {
    randomColor();
});

newGrid.addEventListener("click", () => {
    input = prompt("Enter a number, 2 to 100");
    if (input >= 2 && input <= 100) {
        createGrid(input);
    }
    else {
        alert("Can't you read ya wanker?");
        console.log("ERROR");
    }
});

resetGrid.addEventListener("click", () => {
    createGrid(16);
    colorRed();
});
