import React from 'react';
import { shallow } from 'enzyme';
import ProjectPage from './ProjectPage';
import { BrowserRouter } from 'react-router-dom';

describe('ProjectPage component', () => {
  it('renders ProjectPage component without crashing', () => {
    shallow(<BrowserRouter>
                <ProjectPage />
            </BrowserRouter>)
  })
})