let currentPlayer = "X";
let gameOver = false;

function clickDiv(div) {
    if (gameOver) return;

    let currentContent = div.innerHTML;
    if (currentContent) return;

    div.innerHTML = currentPlayer;
    div.style.backgroundColor = currentPlayer === "X" ? "aqua" : "rgb(43, 43, 247)";
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    checkWhoWins();
}

function resetGame() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.style.backgroundColor = "white";
    });
    currentPlayer = "X";
    gameOver = false;
    document.getElementById("message").innerHTML = "";
}

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Vertical
    [0, 4, 8], [2, 4, 6]              // Diagonal
];

function checkWhoWins() {
    let cells = Array.from(document.querySelectorAll(".cell"));
    for (let combination of winningCombinations) {
        if (cells[combination[0]].innerHTML &&
            cells[combination[0]].innerHTML === cells[combination[1]].innerHTML &&
            cells[combination[0]].innerHTML === cells[combination[2]].innerHTML) {
            displayWinner(cells[combination[0]].innerHTML);
            return;
        }
    }
}

function displayWinner(winner) {
    let message = document.getElementById("message");
    message.innerHTML = `${winner} wins!`;
    gameOver = true;
}
