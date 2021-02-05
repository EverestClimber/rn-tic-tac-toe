/**
 * tic-tac-toe game
 */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar
} from 'react-native';
import { Container, Header, Board, GameStatus, GameReset } from './components';
import { getChunkedList, checkWonTheGame } from './utils';

const initialValues = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const Game = () => {
  const { bodyStyle } = styles;
  const [gridValues, setGridValues] = useState([]); // game value data
  const [currentPlayer, setCurrentPlayer] = useState(''); // current player: '0' or 'X'
  const [gameStatus, setGameStatus] = useState(0); // game status: 0 - can play, 1 - finished(won/lost), 2 - finished(ended in a draw)

  const gameFinished = () => gridValues.flat().every(v => !!v)

  const getNextPlayer = () => currentPlayer === '0' ? 'X' : '0';

  const onBoardClick = (index) => () => {
    const flattenValues = gridValues.flat();
    if (!flattenValues[index] && !gameStatus) {
      flattenValues[index] = currentPlayer;

      setGridValues(getChunkedList(flattenValues));
    }
  };

  const initializeGame = () => {
    setGameStatus(0);
    setCurrentPlayer('0');
    setGridValues(initialValues);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    const status = checkWonTheGame([...gridValues], currentPlayer);
    if (!gameFinished()) {
      if (!status) setCurrentPlayer(getNextPlayer());
      setGameStatus(+status);
    } else {
      setGameStatus(2);
    }
  }, [gridValues]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView testID="screen-view" style={bodyStyle}>
        <Container>
          <Header text="3x3 Tic-Tac-Toe Game" />
          <GameStatus player={currentPlayer} gameStatus={gameStatus} />
          <Board
            gridValues={gridValues}
            onClick={onBoardClick}
          />
          {!!gameStatus && <GameReset onClick={initializeGame} />}
        </Container>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
  },
});

export default Game;
