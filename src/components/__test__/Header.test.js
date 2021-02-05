import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import Header from '../Header';

beforeEach(cleanup);

describe('<Header />', () => {
  describe('Success', () => {
    it('renders Header', () => {
      const text = 'header';
      const { getByText } = render(
        <Header text={text}/>
      );

      expect(getByText(text)).toBeTruthy();
    });
  });
});
