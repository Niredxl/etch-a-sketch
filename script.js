const grid = document.querySelector(".grid");

function generateRandomInteger(){
    return Math.floor(Math.random() * (255 - 0) )  + 0; 
}

function randomizeColor(){
    let red = String(generateRandomInteger());
    let green = String(generateRandomInteger());
    let blue = String(generateRandomInteger());
    return "rgb(" + red + "," + blue + "," + green + ")";
}



function createGrid(gridsize){
    
    const gridrow = document.createElement("div");
    gridrow.classList.add("gridrow");

    const gridbox = document.createElement("div");
    gridbox.classList.add("gridbox");
    gridbox.style.backgroundColor = "white";

    // hover effect for the boxes
    grid.addEventListener("mouseover", () => {
        const gridbox = event.target;
        if (gridbox.style.backgroundColor == "white"){
            gridbox.style.backgroundColor = randomizeColor();
            gridbox.style.opacity = "0.2";
        }
        else{
            let opacity = parseFloat(gridbox.style.opacity);
            if (opacity >= 1.0){
                return
            }   
            opacity += 0.2
            gridbox.style.opacity = opacity;
            
        }

        });

    // adding grid boxes to a row
    for (let i = 0; i < gridsize; i++){
        gridrow.appendChild(gridbox.cloneNode(1));
    }
    // adding rows to the grid
    for (let i = 0; i < gridsize; i++){
        grid.appendChild(gridrow.cloneNode(1));
    }
}
createGrid(16);
function deleteGrid(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const button = document.querySelector(".btn");
const line = document.getElementById("line");
button.addEventListener("click", () => {
    let user_input = prompt("Enter a grid size (max 100) : ", "16");
    let user_number = parseInt(user_input);
    if (user_input == null || user_number > 100){
        text = "no valid input given";
        line.innerHTML = text;
    } else{
        text = "Hover over a box to change color";
        line.innerHTML = text;
        deleteGrid(grid);
        createGrid(user_number);
    }
});




