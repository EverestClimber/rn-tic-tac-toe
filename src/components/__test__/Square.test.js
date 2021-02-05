import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import Square from '../Square';

beforeEach(cleanup);

describe('<Square />', () => {
  describe('Success', () => {
    it('renders Square', () => {
      const onClick = jest.fn();
      const value = 'square';

      const { getByText } = render(
        <Square onClick={onClick} value={value} />
      );

      expect(getByText(value)).toBeTruthy();
    });

    it('renders Square and clicks button', () => {
      const onClick = jest.fn();
      const value = 'square';

      const { getByText } = render(
        <Square onClick={onClick} value={value} />
      );

      fireEvent(getByText(value), 'onClick');
      expect(onClick).toHaveBeenCalled();
    });
  });
});
