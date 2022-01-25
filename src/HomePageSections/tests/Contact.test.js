import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../Contact';

describe('Contact component', () => {
  it('renders Contact component without crashing', () => {
    shallow(<Contact />)
  })
})