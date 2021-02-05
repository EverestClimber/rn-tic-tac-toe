import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import Board from '../Board';

beforeEach(cleanup);

describe('<Board />', () => {
  describe('Success', () => {
    it('renders Board with zero grid values', () => {
      const { getByTestId } = render(
        <Board />
      );
      const element = getByTestId('board');

      expect(element).toBeTruthy();
    });

    it('renders Board with empty grid values', () => {
      const gridValues = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      const onClick = jest.fn();

      const { queryAllByText } = render(
        <Board gridValues={gridValues} onClick={onClick} />
      );

      expect(queryAllByText('')).toHaveLength(9);
    });

    it('renders Board with random grid values', () => {
      const gridValues = [
        ['X', '', 'X'],
        ['', 'O', ''],
        ['', 'X', 'O']
      ];
      const onClick = jest.fn();

      const { queryAllByText } = render(
        <Board gridValues={gridValues} onClick={onClick} />
      );

      expect(queryAllByText('X')).toHaveLength(3);
      expect(queryAllByText('O')).toHaveLength(2);
      expect(queryAllByText('')).toHaveLength(4);
    });

    it('renders Board and clicks square', () => {
      const gridValues = [
        ['X', '', 'X'],
        ['', 'O', ''],
        ['', 'X', 'O']
      ];
      const onClick = jest.fn();

      const { queryAllByText } = render(
        <Board gridValues={gridValues} onClick={onClick} />
      );

      fireEvent(queryAllByText('')[1], 'onClick');
      expect(onClick).toHaveBeenCalled();
    });
  });
});
