import React, { Component } from 'react'
import NewsItems from './NewsItems';

export class News extends Component {
  render() {
    return (
      <div>
        <h1>News monkey top headlines</h1>


        <div className="row">
          <div className="col md-4">
            <NewsItems title="My title" discribtion="My discribtion"/>
          </div>
           <div className="col md-4">
            <NewsItems title="My title" discribtion="My discribtion"/>
          </div>
           <div className="col md-4">
            <NewsItems title="My title" discribtion="My discribtion"/>
          </div>
           <div className="col md-4">
            <NewsItems title="My title" discribtion="My discribtion"/>
          </div>
        </div>


         <div className="row">
          <div className="col md-4">
            <NewsItems title="My title" discribtion="My discribtion"/>
          </div>
           <div className="col md-4">
            <NewsItems title="My title" discribtion="My discribtion"/>
          </div>
           <div className="col md-4">
            <NewsItems title="My title" discribtion="My discribtion"/>
          </div>
           <div className="col md-4">
            <NewsItems title="My title" discribtion="My discribtion"/>
          </div>
        </div>

      
       
        
      </div>
    )
  }
}

export default News
