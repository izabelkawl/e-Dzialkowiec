import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from './Wrapper';

it('renders correctly', () => {
  const tree = renderer
    .create(<Wrapper />)
    .toJSON();
    // console.log(tree)
  expect(tree).toMatchSnapshot();
});
