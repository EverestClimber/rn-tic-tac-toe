import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import GameStatus from '../GameStatus';

beforeEach(cleanup);

describe('<GameStatus />', () => {
  describe('Success', () => {
    it('renders GameStatus for next player', () => {
      const player = '0';
      const gameStatus = 0;
      const expectedText = `Next Player: ${player}`;

      const { getByText } = render(
        <GameStatus player={player} gameStatus={gameStatus} />
      );

      expect(getByText(expectedText)).toBeTruthy();
    });

    it('renders GameStatus for winner', () => {
      const player = '0';
      const gameStatus = 1;
      const expectedText = `Winner: ${player}`;

      const { getByText } = render(
        <GameStatus player={player} gameStatus={gameStatus} />
      );

      expect(getByText(expectedText)).toBeTruthy();
    });

    it('renders GameStatus for draw', () => {
      const { getByText } = render(
        <GameStatus player={'0'} gameStatus={2} />
      );

      expect(getByText('Ended in a draw')).toBeTruthy();
    });

    it('renders GameStatus for invalid value', () => {
      const { getByText } = render(
        <GameStatus player={'0'} gameStatus={4} />
      );

      expect(getByText('')).toBeTruthy();
    });
  });
});
