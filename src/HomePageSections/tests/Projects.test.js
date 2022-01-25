import React from 'react';
import { shallow } from 'enzyme';
import Projects from '../Projects';

describe('Projects component', () => {
  it('renders Projects component without crashing', () => {
    shallow(<Projects />)
  })
})