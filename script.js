// **Create Grid**

// Assign value of 16 to variable


// Multiply variable by itself to get total number of divs


//create single div
function createDiv() {
    let div = document.createElement('div');
    div.classList.add('pixel');
    return div;
}
let div = createDiv();

//insert total number of divs into container; Use CSS grid to lay them out evenly
function createGrid(div, size) {
    let gridSize = size;
    let totalPixels = gridSize * gridSize;
    let container = document.querySelector('.container');
    let docFrag = document.createDocumentFragment();
    for (let i=0; i<totalPixels; i++) {
        docFrag.appendChild(div.cloneNode(true));
    };
    document.querySelector('.container').appendChild(docFrag);
    container.style.setProperty('--grid-rows', gridSize);
    container.style.setProperty('--grid-cols', gridSize);
};
createGrid(div, 16);



// **Hover effect**
function createTrail() {
    let pixelArray = document.querySelectorAll('.pixel');
    pixelArray.forEach(function(pixel){
        pixel.addEventListener('mouseover', (e) => {
            pixel.classList.add('hovered');
        })
    });
};
createTrail();

// **Clear Canvas**
function clearCanvas(){
    let pixelArray = document.querySelectorAll('.pixel');
    pixelArray.forEach(function(pixel){
        pixel.classList.remove('hovered');
    })
};

// **Reset button**
let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', (e) => {
    clearCanvas();
    userInput();
})

//**Take user input**
function userInput() {
    let num = parseInt(prompt('Please choose a canvas size between 1 and 100 - e.g. 16'));
    if (isNaN(num)) {
        alert('ERROR - not a numeric value');
        createGrid(div,16);
    } else if (num > 100 || num < 1) {
        alert('Please choose a value between 1 and 100');
        createGrid(div,16);
    } else {
        createGrid(div,num);
        createTrail();
    }
}

//**Rainbow mode */
let rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', (e) => {
    clearCanvas();
    let pixelArray = document.querySelectorAll('.pixel');
    pixelArray.forEach(function(pixel){
        pixel.addEventListener('mouseover', (e) => {
            pixel.style.setProperty()
            pixel.classList.add('random');
        })
    });
})