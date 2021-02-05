const getChunkedList = (list, count = 3) => {
  const chunkedList = [];
  while (list.length) chunkedList.push(list.splice(0, count));
  return chunkedList;
};

const checkIsAllEqual = arr => !!arr[0] ? arr.every(v => v === arr[0]) : false;

/**
 * there can be three cases to check game status for determining the winner.
 * [[0,1,2],
 *  [3,4,5],
 *  [6,7,8]]
 * 
 * 1) 0 = 1 = 2 or 3 = 4 = 5 or 6 = 7 = 8; check by row
 * 2) 0 = 3 = 6 or 1 = 4 = 7 or 2 = 5 = 8; check by column
 * 3) 0 = 4 = 8 or 2 = 4 = 6; check by diagonal
 */
const checkWonTheGame = (gridValues, currentValue, count = 3) => {
  const checkWonByRow = (row) => (gridValues[row]
    .filter(value => value === currentValue)
  ).length === count;

  const checkWonByColumn = (col) => (gridValues
    .map(rowList => rowList[col] === currentValue)
    .filter(status => !!status)
  ).length === count;

  const checkWonByDiagonal = () => {
    const diagonal1 = gridValues.map((rowList, index) => rowList[index]);
    const diagonal2 = gridValues.reverse().map((rowList, index) => rowList[index]);

    if (checkIsAllEqual(diagonal1) || checkIsAllEqual(diagonal2)) {
      return true;
    }

    return false;
  };

  for (let rowOrCol = 0; rowOrCol < gridValues.length; rowOrCol++) {
    if (
      checkWonByRow(rowOrCol)
      || checkWonByColumn(rowOrCol)
      || checkWonByDiagonal()
    ) {
      return true;
    }
  }

  return false;
};

export {
  getChunkedList,
  checkWonTheGame
};
