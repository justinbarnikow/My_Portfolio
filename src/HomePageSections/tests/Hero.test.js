import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../Hero';

describe('Hero component', () => {
  it('renders Hero component without crashing', () => {
    shallow(<Hero />)
  })
})