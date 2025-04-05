// VARIABLES //
let colors = [];
let winnerColor;
let dificulty = 2;
let randomIndex = 0;
let lines = document.querySelectorAll(".line");
let boxes = document.querySelectorAll(".box")
let header = document.querySelector(".header");
let btns = document.querySelectorAll(".btn-group");
let colorGuess = document.querySelector("#colorGuess");
let newColorsButton = document.querySelector("#newColors");

//FUNCTIONS
function youWon(winnerBox) {
    boxes.forEach(function (element) {
        element.style.backgroundColor = winnerBox.getAttribute("color");
    })
    header.style.backgroundColor = winnerBox.getAttribute("color");
}

function loadColors() {
    // Here we limit the availability to those boxes which are visible
    // (dificulty = number of lines visible) * 3 ( = boxes per line) - 1 (because start from zero)
    let boxes = document.querySelectorAll(".box");
    randomIndex = Math.round(Math.random() * (dificulty * 3 - 1));

    // here we asign a color randonmly obtained to each box "visible" in the array
    boxes.forEach(function (element, index) {
        console.log(element);
        if (index < dificulty * 3) {

            element.style.display = "block";
            let r = Math.round(Math.random() * 255);
            let g = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            let rgb = `rgb(${r}, ${g}, ${b})`;

            element.style.backgroundColor = rgb;
            element.setAttribute("color", rgb)

            colors[index] = `rgb(${r}, ${g}, ${b})`;
        }
    })
    // here we assign a random value taken from one of our boxes to the winnerColor
    winnerColor = colors[randomIndex];
    colorGuess.textContent = winnerColor.toUpperCase();
}

function setDifficulty(){
// to switch the dificulties button
    btns.forEach(function (element, index, array) {
        element.addEventListener("click", function () {
    
            this.classList.add("active");
    
            for (i = 0; i < btns.length; i++) {
                if (i !== index) {
                    btns[i].classList.remove("active");
                }
            }
    
            dificulty = parseInt(this.getAttribute("dificulty"));
    
            switch (dificulty) {
                case 1:
                    lines[0].style.display = "flex";
                    lines[1].style.display = "none";
                    lines[2].style.display = "none";
                    break;
    
                case 2:
                    lines[0].style.display = "flex";
                    lines[1].style.display = "flex";
                    lines[2].style.display = "none";
                    break;
    
                case 3:
                    lines[0].style.display = "flex";
                    lines[1].style.display = "flex";
                    lines[2].style.display = "flex";
    
                    break;
            }
            loadColors();
        })
    })
}

function setBoxesListener(){
// to hide a box when is clicked but not the winnerBox
    boxes.forEach(function (element) {
        element.addEventListener("click", function () {
            if (this.getAttribute("color") === winnerColor) {
                youWon(this);
            } else {
                this.style.display = "none";
            }
        })
    })
}
function init(){
    loadColors();
    setDifficulty();
    setBoxesListener();
    loadColors();
    // execute when we click "New Colors" Button
    newColorsButton.addEventListener("click", loadColors);
}


window.onload = init();