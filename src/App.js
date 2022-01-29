import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePageSections/HomePage';
import './App.css'
import { ProjectSlideshowData } from './Slideshows/ProjectSlideshowData';
import ProjectPage from './ProjectPages/ProjectPage';

export default class App extends Component {
  render() {


    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects/1' element={<ProjectPage project={ProjectSlideshowData[0]} />} />
          <Route path='/projects/2' element={<ProjectPage project={ProjectSlideshowData[1]} />} />
          <Route path='/projects/3' element={<ProjectPage project={ProjectSlideshowData[2]} />} />
          <Route path='/projects/4' element={<ProjectPage project={ProjectSlideshowData[3]} />} />
        </Routes>
      </div>
      );
  }
}
