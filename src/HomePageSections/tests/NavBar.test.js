import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

describe('Navbar component', () => {
  it('renders Navbar component without crashing', () => {
    shallow(<NavBar />)
  })
})