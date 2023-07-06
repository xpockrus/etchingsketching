const reset = document.querySelector("#newGrid");

function createGrid(size) {
    let container = document.querySelector("#container");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let sizeSquared = size * size
    for (i = 0; i < sizeSquared; i++) {
        let square = document.createElement("div")
        square.style.backgroundColor = "red"
        container.appendChild(square);
    }
}

createGrid(16);

reset.addEventListener("click", () => {
    input = prompt("Enter a number, 2 to 100");
    if (input >= 2 && input <= 100) {
        createGrid(input);
    }
    else {
        alert("Can't you read ya wanker?");
    }
});
