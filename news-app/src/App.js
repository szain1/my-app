
import './App.css';
import Navbar from './component/Navbar';
import NewsItems from './component/NewsItems';
import News from './component/News';

import React, { Component } from 'react'

export default class App extends Component {
  
  render() {
   
    return (
   <div>
      <Navbar/>
      <News/>
      <NewsItems/>
      

   </div>
    )
  }
}