const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
const popup = document.getElementById('popup');
const resultMessage = document.getElementById('result-message');
const newGameButton = document.getElementById('new-game');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (gameBoard[index] === '' && !checkWinner()) {
      gameBoard[index] = currentPlayer;
      cell.textContent = currentPlayer;
      if (checkWinner()) {
        resultMessage.textContent = `${currentPlayer} wins!`;
        highlightWinnerCells(getWinningCells());
        popup.style.display = 'flex';
      } else if (!gameBoard.includes('')) {
        resultMessage.textContent = 'It\'s a draw!';
        displayTieAnimation();
        popup.style.display = 'flex';
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});

resetButton.addEventListener('click', () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.backgroundColor = '#eee';
    cell.style.animation = '';
  });
  currentPlayer = 'X';
  popup.style.display = 'none';
});

newGameButton.addEventListener('click', () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.backgroundColor = '#eee';
    cell.style.animation = '';
  });
  currentPlayer = 'X';
  popup.style.display = 'none';
});

function checkWinner() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function getWinningCells() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return [a, b, c];
    }
  }
  return null;
}

function highlightWinnerCells(winningCells) {
  if (winningCells) {
    winningCells.forEach(index => {
      cells[index].style.backgroundColor = '#4CAF50';
    });
  }
}

function displayTieAnimation() {
  cells.forEach(cell => {
    cell.style.backgroundColor = '#2196F3';
    cell.style.animation = 'tieAnimation 0.5s ease-in-out alternate infinite';
  });
}

// 1. I want to create a Tic-Tac-Toe game so generate the mobile responsive code for HTML, CSS and Javascript.
// 2. Add a linear gradient color in the background, show player win and draw in new screen and add a button for new game.
