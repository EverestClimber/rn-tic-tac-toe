import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import GameReset from '../GameReset';

beforeEach(cleanup);

describe('<GameReset />', () => {
  describe('Success', () => {
    it('renders GameReset', () => {
      const onClick = jest.fn();
      const expectedText = 'Restart Game';

      const { getByText } = render(
        <GameReset onClick={onClick} />
      );

      expect(getByText(expectedText)).toBeTruthy();
    });

    it('renders GameReset and clicks button', () => {
      const onClick = jest.fn();
      const testId = 'game-reset';

      const { getByTestId } = render(
        <GameReset onClick={onClick} />
      );

      fireEvent(getByTestId(testId), 'onPress');
      expect(onClick).toHaveBeenCalled();
    });
  });
});
