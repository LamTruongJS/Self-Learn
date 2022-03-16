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
  console.log('index', index);
  console.log(checkedValueWin);
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
  const valueFirst = horizontalCheck(valueChess, index);
  const valueSecond = verticalCheck(valueChess, index);
  const valueThird = crossCheckFirst(valueChess, index);
  const valueFourth = crossCheckSecond(valueChess, index);
  return valueFirst.length != 0
    ? valueFirst
    : valueSecond.length != 0
    ? valueSecond
    : valueThird.length != 0
    ? valueThird
    : valueFourth.length != 0
    ? valueFourth
    : [];
};

const horizontalCheck = (valueChess, index) => {
  let valueWin = [];
  rowCurrent = Math.floor(index / 10);
  let count = 1;
  valueWin.push(index);
  //ktra lùi
  for (let countDown = 1; countDown <= countDown * 5; countDown++) {
    if (count === 5) break;
    let rowCountDown = Math.floor((index - countDown) / 10); // lấy ra cái hàng của thằng lùi
    if (
      rowCurrent != rowCountDown ||
      valueChess[index - countDown] !== valueChess[index] ||
      valueChess[index - countDown] === undefined
    )
      break;
    valueWin.push(index - countDown);
    count += 1;
    console.log('down', count);
  }
  // kiểm tra tiến
  for (let countUp = 1; countUp <= countUp * 5; countUp++) {
    if (count === 5) break;
    let rowCountUp = Math.floor((index + countUp) / 10); // lấy ra cái hàng của thằng tiến
    if (
      rowCurrent != rowCountUp ||
      valueChess[index + countUp] !== valueChess[index] ||
      valueChess[index + countUp] === undefined
    )
      break;
    valueWin.push(index + countUp);
    count += 1;
    console.log('up', count);
  }

  return count === 5 ? valueWin : [];
};
//kiểm tra cột
const verticalCheck = (valueChess, index) => {
  let valueWin = [];
  columnCurrent = (index % 10) + 1;

  let count = 1;
  valueWin.push(index);
  //ktra lùi
  for (let countDown = 10; countDown < countDown * 5; countDown += 10) {
    if (count === 5) break;
    let columnCountDown = ((index - countDown) % 10) + 1; // lấy ra cái cột của thằng lùi
    if (
      columnCurrent != columnCountDown ||
      valueChess[index - countDown] !== valueChess[index] ||
      valueChess[index - countDown] === undefined
    )
      break;
    valueWin.push(index - countDown);
    count += 1;
    console.log('down', count);
  }
  // kiểm tra tiến
  for (let countUp = 10; countUp < countUp * 5; countUp += 10) {
    if (count === 5) break;
    let columnCountUp = ((index - countUp) % 10) + 1; // lấy ra cái hàng của thằng tiến
    if (
      columnCurrent != columnCountUp ||
      valueChess[index + countUp] !== valueChess[index] ||
      valueChess[index + countUp] === undefined
    )
      break;
    valueWin.push(index + countUp);
    count += 1;
    console.log('up', count);
  }

  return count === 5 ? valueWin : [];
};

const crossCheckFirst = (valueChess, index) => {
  let valueWin = [];
  columnCurrent = (index % 10) + 1;
  rowCurrent = Math.floor(index / 10);

  let count = 1;
  valueWin.push(index);

  //kiểm tra lùi
  for (let countDown = 11; countDown < countDown * 5; countDown += 11) {
    if (count === 5) break;
    let rowCountDown = Math.floor((index - countDown) / 10); // lấy ra cái hàng của thằng lùi
    if (
      rowCurrent !== rowCountDown + Math.trunc(countDown / 10) ||
      valueChess[index - countDown] !== valueChess[index] ||
      valueChess[index - countDown] === undefined
    )
      break;
    valueWin.push(index - countDown);
    count += 1;
    console.log('down', count);
  }

  //kiểm tra tiến
  for (let countUp = 11; countUp < countUp * 5; countUp += 11) {
    if (count === 5) break;
    let rowCountUp = Math.floor((index - countUp) / 10); // lấy ra cái hàng của thằng lùi
    if (
      rowCurrent !== rowCountUp - Math.trunc(countUp / 10) ||
      valueChess[index - countUp] !== valueChess[index] ||
      valueChess[index - countUp] === undefined
    )
      break;
    valueWin.push(index - countUp);
    count += 1;
    console.log('Up', count);
  }

  return count === 5 ? valueWin : [];
};

const crossCheckSecond = (valueChess, index) => {
  let valueWin = [];
  columnCurrent = (index % 10) + 1;
  rowCurrent = Math.floor(index / 10);

  let count = 1;
  valueWin.push(index);

  //kiểm tra lùi
  for (let countDown = 9; countDown < countDown * 5; countDown += 9) {
    if (count === 5) break;
    let rowCountDown = Math.floor((index - countDown) / 10); // lấy ra cái hàng của thằng lùi
    if (
      rowCurrent !== rowCountDown - Math.trunc(countDown / 10) ||
      valueChess[index - countDown] !== valueChess[index] ||
      valueChess[index - countDown] === undefined
    )
      break;
    valueWin.push(index - countDown);
    count += 1;
    console.log('down', count);
  }

  //kiểm tra tiến
  for (let countUp = 9; countUp < countUp * 5; countUp += 9) {
    if (count === 5) break;
    let rowCountUp = Math.floor((index - countUp) / 10); // lấy ra cái hàng của thằng lùi
    if (
      rowCurrent !== rowCountUp + Math.trunc(countUp / 10) ||
      valueChess[index - countUp] !== valueChess[index] ||
      valueChess[index - countUp] === undefined
    )
      break;
    valueWin.push(index - countUp);
    count += 1;
    console.log('Up', count);
  }

  return count === 5 ? valueWin : [];
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
  // tạo ra thẻ
  for (let i = 0; i < 100; i++) {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
  }

  const listArea = ulElement.querySelectorAll('li');

  let valueChess = new Array(listArea.length).fill('');
  main(turnGame, listArea, ping, valueChess);
  document.getElementById('replayGame').addEventListener('click', () => {
    replayGame(turnGame, ping, valueChess, listArea);
  });
})();
