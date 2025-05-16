import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description,urlToImage, newsUrl} = this.props;
    return (
      <div className="container my-4">

        <div class="card" >
  <img src={urlToImage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <a href={newsUrl} target='_blank' class="btn btn-sm btn-primary">EXplore the news</a>
  </div>
</div>
        
      </div>
    )
  }
}

export default NewsItems
// Compare this snippet from src/component/News.js:

