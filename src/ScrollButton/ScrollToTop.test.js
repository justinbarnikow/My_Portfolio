import React from 'react';
import { shallow } from 'enzyme';
import ScrollToTop from './ScrollToTop';

describe('ScrollToTop component', () => {
  it('renders ScrollToTop component without crashing', () => {
    shallow(<ScrollToTop />)
  })
})