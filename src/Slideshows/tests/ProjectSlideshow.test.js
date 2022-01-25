import React from 'react';
import { shallow } from 'enzyme';
import ProjectSlideshow from '../ProjectSlideshow'

describe('ProjectSlideshow component', () => {
  it('renders ProjectSlideshow component without crashing', () => {
    shallow(<ProjectSlideshow />)
  })
})