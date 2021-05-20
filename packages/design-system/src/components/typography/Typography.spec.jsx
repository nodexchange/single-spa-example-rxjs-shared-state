import React from 'react';
import ReactDOM from 'react-dom';
import Typography from './Typography';

const variants = [
  'main',
  'headline',
  'text',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5'
];

describe('Typography', () => {
  it('should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Typography>Foo</Typography>, div);
    expect(div.children[0]).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });

  it.each(variants)('should render correctly with variant %s', (variant) => {
    const div = document.createElement('div');
    ReactDOM.render(<Typography variant={variant}>Foo</Typography>, div);
    expect(div.children[0]).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});
