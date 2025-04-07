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
let restartButton = document.querySelector("#restartGame");
let attempts = 0;
let maxAttempts = 3;
let attemptsDisplay = document.querySelector("#attemptsDisplay");

//FUNCTIONS
function updateAttempts() {
    attemptsDisplay.textContent = `Attempts: ${attempts}/${maxAttempts}`;
}

function checkGameOver() {
    if (attempts >= maxAttempts) {
        alert("You lost! Better luck next time.");
        restartGame();
    }
}

function youWon(winnerBox) {
    // Change all squares to the winner's color with animation
    boxes.forEach(function (element) {
        element.style.backgroundColor = winnerBox.getAttribute("color");
        element.style.display = "block"; // Ensure all boxes are visible
        element.classList.add("box-win-animation"); // Add animation class
    });
    header.style.backgroundColor = winnerBox.getAttribute("color");
    setTimeout(() => {
        alert("Congratulations! You won!");
        restartGame();
    }, 3000); // Delay popup to allow animation to play
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

function setDifficulty() {
    // to switch the difficulties button
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
                case 1: // Easy
                    maxAttempts = 1;
                    lines[0].style.display = "flex";
                    lines[1].style.display = "none";
                    lines[2].style.display = "none";
                    if (document.querySelector("#line4")) {
                        document.querySelector("#line4").style.display = "none";
                    }
                    break;

                case 2: // Medium
                    maxAttempts = 2;
                    lines[0].style.display = "flex";
                    lines[1].style.display = "flex";
                    lines[2].style.display = "none";
                    if (document.querySelector("#line4")) {
                        document.querySelector("#line4").style.display = "none";
                    }
                    break;

                case 3: // Hard
                    maxAttempts = 3;
                    lines[0].style.display = "flex";
                    lines[1].style.display = "flex";
                    lines[2].style.display = "flex";
                    if (document.querySelector("#line4")) {
                        document.querySelector("#line4").style.display = "none";
                    }
                    break;

                case 4: // Very Hard
                    maxAttempts = 3;
                    lines[0].style.display = "flex";
                    lines[1].style.display = "flex";
                    lines[2].style.display = "flex";
                    lines[3].style.display = "flex";
                    
                    break;
            }

            attempts = 0; // Reset attempts
            updateAttempts();
            loadColors();
        });
    });
}

function setBoxesListener() {
    // to hide a box when it is clicked but not the winnerBox
    boxes.forEach(function (element) {
        element.addEventListener("click", function () {
            if (this.getAttribute("color") === winnerColor) {
                youWon(this);
            } else {
                this.style.display = "none";
                this.classList.add("box-wrong-animation"); // Add wrong box animation
                attempts++;
                updateAttempts();
                checkGameOver();
            }
        });
    });
}

function restartGame() {
    header.style.backgroundColor = "#90afda"; // Reset header color
    boxes.forEach(function (element) {
        element.style.display = "block"; // Show all boxes
    });
    attempts = 0; // Reset attempts
    updateAttempts();
    loadColors(); // Reload colors
    // Hide the fourth line if not in "Very Hard" mode
    if (dificulty !== 4 && document.querySelector("#line4")) {
        document.querySelector("#line4").style.display = "none";
    }
}

function init() {
    loadColors();
    setDifficulty();
    setBoxesListener();
    updateAttempts(); // Initialize attempts display
    // execute when we click "New Colors" Button
    newColorsButton.addEventListener("click", loadColors);
    // execute when we click "Restart Game" Button
    restartButton.addEventListener("click", restartGame);
}

window.onload = init();