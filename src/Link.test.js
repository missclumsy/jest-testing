import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

describe('<Link />', () => {
  const link = <Link page='lol.com'>Link</Link>

  test('renders correctly', () => {
    const component = renderer.create(link).toJSON();
    expect(component).toMatchSnapshot();
  })
})
