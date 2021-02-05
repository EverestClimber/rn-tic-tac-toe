import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import Container from '../Container';

beforeEach(cleanup);

describe('<Container />', () => {
  describe('Success', () => {
    it('renders Container with empty children', () => {
      const { getByTestId } = render(
        <Container />
      );
      const element = getByTestId('conatiner');

      expect(element).toBeTruthy();
    });

    it('renders Container with text component', () => {
      const { getByText } = render(
        <Container>
          <Text>container</Text>
        </Container>
      );

      expect(getByText('container')).toBeTruthy();
      expect(getByText('container').children).toHaveLength(1);
    });
  });
});
