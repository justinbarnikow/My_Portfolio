import React from 'react';
import { shallow } from 'enzyme';
import About from '../About';

describe('About component', () => {
  it('renders About component without crashing', () => {
    shallow(<About />)
  })
})