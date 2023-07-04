let container = document.querySelector("#container")

for (i = 0; i < 256; i++) {
    let div = document.createElement("div")
    div.setAttribute("class", "square");
    container.appendChild(div);
}

let tiles = document.querySelectorAll(".square");

tiles.forEach((tile) => {
    tile.addEventListener("mouseover", function(e) {
        e.target.classList.add("changed");
    });
    tile.addEventListener("mouseout", function(e) {
        e.target.classList.remove("changed");
    })
});

let button = document.querySelector("#newGrid");
