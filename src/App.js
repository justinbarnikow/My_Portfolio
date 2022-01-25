import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePageSections/HomePage';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      );
  }
}
