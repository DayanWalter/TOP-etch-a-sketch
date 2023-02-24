const container = document.getElementById("container");
const rowsAndColumsButton = document.getElementById("rowsAndColums")

rowsAndColumsButton.addEventListener("click", createRowsAndColums)

function createRowsAndColums(){
    // set everything to default
    container.innerHTML = "";
    let colums = prompt("Enter number of colums","");
    // check if the input is too high or too low
    if(colums >=1 && colums <= 100){
        // loop through the prompt input and create divs
        for(i=0; i<(colums*colums); i++){
            const addedDiv = document.createElement("div");
            addedDiv.classList = "addedDiv";
            // addEventlister here, NOT outside of the function
            addedDiv.addEventListener('mouseover', hover);
            container.appendChild(addedDiv);
        }
    }else if(colums <= 0){
        alert("Input too low!")
    }else{
        alert("Input too high!")
    }
    // define how much rows and colums are in the container, dependend on the prompt input
    container.style.gridTemplateColumns = `repeat(${colums}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${colums}, 1fr)`;
}

// add class to the div via mouseover
function hover () {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

