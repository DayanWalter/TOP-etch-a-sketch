const container = document.getElementById("container");
const rowsAndColumsButton = document.getElementById("rowsAndColums")

rowsAndColumsButton.addEventListener("click", createRowsAndColums)

function createRowsAndColums(){
    // set everything to default
    container.innerHTML = "";
    let colums = prompt("Enter number of colums","");
    // loop through the prompt input and create divs
    for(i=0; i<(colums*colums); i++){
        const div = document.createElement("div");
        container.appendChild(div);
    }
    // define how much rows and colums are in the container, dependend on the prompt input
    container.style.gridTemplateColumns = `repeat(${colums}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${colums}, 1fr)`;
}

