console.log("Hello World");
let gridsize = 16;
const grid = document.querySelector(".grid");
const gridrow = document.createElement("div");
gridrow.classList.add("gridrow");

const gridbox = document.createElement("div");
gridbox.classList.add("gridbox");

// hover effect for the boxes
grid.addEventListener("mouseover", () => {
            event.target.style.backgroundColor = 'green';
        });

// adding grid boxes to a row
for (let i = 0; i < gridsize; i++){
    gridrow.appendChild(gridbox.cloneNode(1));
}
// adding rows to the grid
for (let i = 0; i < gridsize; i++){
    grid.appendChild(gridrow.cloneNode(1));
}
