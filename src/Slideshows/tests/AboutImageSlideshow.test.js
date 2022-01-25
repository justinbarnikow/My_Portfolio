import React from 'react';
import { shallow } from 'enzyme';
import AboutImageSlideshow from '../AboutImageSlideshow'

describe('AboutImageSlideshow component', () => {
  it('renders AboutImageSlideshow component without crashing', () => {
    shallow(<AboutImageSlideshow />)
  })
})