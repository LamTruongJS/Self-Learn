const playGame = (liElement, turnGame, valueChess, index, listArea, ping) => {
  liElement.addEventListener('click', () => {
    if (ping.type !== 'play') return;
    if (valueChess[index] != '') return;
    if (turnGame.type == 'cross') {
      valueChess[index] = turnGame.type;
      liElement.classList.add('cross');
    } else {
      liElement.classList.add('circle');
      valueChess[index] = turnGame.type;
    }

    checkTurnGame(turnGame);
    changeTurn(turnGame);
    getChessWin(valueChess, index, listArea, turnGame, ping);
    checkFullValue(valueChess, ping);
  });
};

const getChessWin = (valueChess, index, listArea, turnGame, ping) => {
  const checkedValueWin = checkWin(valueChess, index);

  if (checkedValueWin.length !== 0) {
    checkedValueWin.forEach((value) => {
      listArea[value].classList.toggle('win');
    });
    btnReplay = document.getElementById('replayGame');
    btnReplay.classList.add('show');
    const currentValueWin = document.querySelector('.win');
    const textWin = currentValueWin.classList.contains('cross') ? 'X' : 'O';
    document.getElementById('gameStatus').textContent = `${textWin} Win`;
    turnGame.type = textWin === 'X' ? 'cross' : 'circle';

    changeTurn(turnGame);
    checkTurnGame(turnGame);
    stopGame(ping);
  }
};

const stopGame = (ping) => {
  ping.type = 'stop';
};

const checkFullValue = (valueChess, ping) => {
  for (let i = 0; i < valueChess.length; i++) {
    if (valueChess[i] === '') return;
  }
  btnReplay = document.getElementById('replayGame');
  btnReplay.classList.add('show');
  stopGame(ping);
};
const checkWin = (valueChess, index) => {
  let flat = false;
  let valueWin = [];
  if (index === 0 || index === 1 || index === 2) {
    if (flat) return valueWin;
    flat = valueChess[0] === valueChess[1] && valueChess[0] === valueChess[2] ? true : false;
    valueWin = [0, 1, 2];
    console.log('Thoat rồi ngang 1');
  }
  if (index === 3 || index === 4 || index === 5) {
    if (flat) return valueWin;
    flat = valueChess[3] === valueChess[4] && valueChess[3] === valueChess[5] ? true : false;
    valueWin = [3, 4, 5];
    console.log('Thoat rồi ngang 2');
  }
  if (index === 6 || index === 7 || index === 8) {
    if (flat) return valueWin;
    flat = valueChess[6] === valueChess[7] && valueChess[6] === valueChess[8] ? true : false;
    valueWin = [6, 7, 8];
    console.log('Thoat rồi ngang 3');
  }
  if (index === 0 || index === 3 || index === 6) {
    if (flat) return valueWin;
    flat = valueChess[0] === valueChess[3] && valueChess[0] === valueChess[6] ? true : false;
    valueWin = [0, 3, 6];
    console.log('Thoat rồi Dọc 1');
  }
  if (index === 1 || index === 4 || index === 7) {
    if (flat) return valueWin;
    flat = valueChess[1] === valueChess[4] && valueChess[1] === valueChess[7] ? true : false;
    valueWin = [1, 4, 7];
    console.log('Thoat rồi dọc 2');
  }
  if (index === 2 || index === 5 || index === 8) {
    if (flat) return valueWin;
    flat = valueChess[2] === valueChess[5] && valueChess[2] === valueChess[8] ? true : false;
    valueWin = [2, 5, 8];
    console.log('Thoat rồi dọc 3');
  }
  if (index === 0 || index === 4 || index === 8) {
    if (flat) return valueWin;
    flat = valueChess[0] === valueChess[4] && valueChess[0] === valueChess[8] ? true : false;
    valueWin = [0, 4, 8];
    console.log('Thoat rồi chéo 1');
  }
  if (index === 2 || index === 4 || index === 6) {
    if (flat) return valueWin;
    flat = valueChess[2] === valueChess[4] && valueChess[2] === valueChess[6] ? true : false;
    valueWin = [2, 4, 6];
    console.log('Thoat rồi chéo 2');
  }

  return flat === true ? valueWin : [];
};

const checkTurnGame = (turnGame) => {
  turnGame.type = turnGame.type === 'circle' ? 'cross' : 'circle';
};

const changeTurn = (turnGame) => {
  const currentTurn = document.getElementById('currentTurn');

  currentTurn.classList.remove('circle', 'cross');
  currentTurn.classList.add(turnGame.type);
};

const replayGame = (turnGame, ping, valueChess, listArea) => {
  ping.type = 'play';
  turnGame.type = 'cross';

  for (let i = 0; i < listArea.length; i++) {
    listArea[i].classList.remove('cross', 'circle', 'win');
    listArea[i].removeAttribute('class');
    valueChess[i] = '';
  }
  document.getElementById('currentTurn').classList.remove('cross', 'circle');
  document.getElementById('currentTurn').classList.add(turnGame.type);
  document.getElementById('gameStatus').textContent = 'loading';
  document.getElementById('replayGame').classList.remove('show');
};

const main = (turnGame, listArea, ping, valueChess) => {
  changeTurn(turnGame);
  if (ping.type === 'play') {
    for (let index = 0; index < listArea.length; index++) {
      playGame(listArea[index], turnGame, valueChess, index, listArea, ping);
    }
  }
};

(() => {
  let turnGame = {
    type: 'cross',
  };
  let ping = {
    type: 'play',
  };

  const ulElement = document.getElementById('cellList');
  const listArea = ulElement.querySelectorAll('li');

  let valueChess = new Array(listArea.length).fill('');
  main(turnGame, listArea, ping, valueChess);
  document.getElementById('replayGame').addEventListener('click', () => {
    replayGame(turnGame, ping, valueChess, listArea);
  });
})();
