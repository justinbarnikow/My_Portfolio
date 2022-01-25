import React from 'react';
import { shallow } from 'enzyme';
import AboutInfoSlideshow from '../AboutInfoSlideshow'

describe('AboutInfoSlideshow component', () => {
  it('renders AboutInfoSlideshow component without crashing', () => {
    shallow(<AboutInfoSlideshow />)
  })
})