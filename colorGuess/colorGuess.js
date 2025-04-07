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
    boxes.forEach(function (element) {
        element.style.backgroundColor = winnerBox.getAttribute("color");
    });
    header.style.backgroundColor = winnerBox.getAttribute("color");
    alert("Congratulations! You won!");
    restartGame();
}

function loadColors() {
    // Adjust the number of boxes based on difficulty
    let totalBoxes = dificulty === 4 ? 16 : dificulty * 3;
    let boxes = document.querySelectorAll(".box");
    randomIndex = Math.round(Math.random() * (totalBoxes - 1));

    boxes.forEach(function (element, index) {
        if (index < totalBoxes) {
            element.style.display = "block";
            let r = Math.round(Math.random() * 255);
            let g = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            let rgb = `rgb(${r}, ${g}, ${b})`;

            element.style.backgroundColor = rgb;
            element.setAttribute("color", rgb);

            colors[index] = rgb;
        } else {
            element.style.display = "none";
        }
    });

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
                    // Add a fourth line dynamically for 4x4 grid
                    if (!document.querySelector("#line4")) {
                        const line4 = document.createElement("div");
                        line4.classList.add("line");
                        line4.id = "line4";
                        for (let i = 0; i < 4; i++) {
                            const box = document.createElement("div");
                            box.classList.add("box");
                            line4.appendChild(box);
                        }
                        document.querySelector(".box-container").appendChild(line4);
                    }
                    document.querySelector("#line4").style.display = "flex";
                    break;
            }

            attempts = 0; // Reset attempts
            updateAttempts();
            loadColors();
        });
    });
}

function setBoxesListener() {
    // to hide a box when is clicked but not the winnerBox
    boxes.forEach(function (element) {
        element.addEventListener("click", function () {
            if (this.getAttribute("color") === winnerColor) {
                youWon(this);
            } else {
                this.style.display = "none";
                attempts++;
                updateAttempts();
                checkGameOver();
            }
        })
    })
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