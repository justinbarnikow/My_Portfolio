import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('Footer component', () => {
  it('renders Footer component without crashing', () => {
    shallow(<Footer />)
  })
})