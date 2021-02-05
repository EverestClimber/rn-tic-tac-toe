import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import Game from '../Game';

beforeEach(cleanup);

describe('<Game />', () => {
  describe('Success', () => {
    it('renders Game', () => {
      const screenViewId = 'screen-view';
      const headerText = '3x3 Tic-Tac-Toe Game';
      const statusText = 'Next Player: X';

      const { getByTestId, getByText } = render(
        <Game />
      );

      expect(getByTestId(screenViewId)).toBeTruthy();
      expect(getByText(headerText)).toBeTruthy();
      expect(getByText(statusText)).toBeTruthy();
    });

    it('renders Game with onBoardClick', () => {
      const { getByTestId, queryAllByText } = render(
        <Game />
      );

      fireEvent(queryAllByText('')[0], 'onClick');
      fireEvent(queryAllByText('X')[0], 'onClick');
      fireEvent(queryAllByText('')[0], 'onClick');
      fireEvent(queryAllByText('')[2], 'onClick');
      fireEvent(queryAllByText('')[2], 'onClick');
      fireEvent(queryAllByText('')[4], 'onClick');
    });
  });
});
