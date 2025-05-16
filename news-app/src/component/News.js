import React, { Component } from 'react'
import NewsItems from './NewsItems';

export class News extends Component {
constructor() {
  super();
console.log("Hello i am constructor from news component");
this.state = {
  article: this.article,
  loading: false,}
}

  render() {
    return (
      <div>
        <h1>News monkey top headlines</h1>

{this.state.article.map((element) => {console.log(element);})}


        <div className="row">
          <div className="col md-4">
            <NewsItems title="My title" discribtion="My discribtion"/>
          </div>
          
        </div>

      
       
        
      </div>
    )
  }
}

export default News
