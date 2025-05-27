import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      // loading: false,
    };
  }

  async componentDidMount() {
    console.log("Hello I am componentDidMount from news component");
    let url = "https://newsapi.org/v2/everything?q=crypto&from=2025-04-20&sortBy=publishedAt&apiKey=22793fc487974694bda62f38a77e3a11";
     this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    this.setState({ loading: false });
    

  handleNext = async () => {
    console.log("Next");
    let url = "https://newsapi.org/v2/everything?q=pakistan&from=2025-04-20&sortBy=publishedAt&apiKey=22793fc487974694bda62f38a77e3a11&page=2";
     this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    this.setState({ loading: false });
    
  }

   handlePre = async () => {
    console.log("Next");
    let url = " https://newsapi.org/v2/everything?q=pakistan&from=2025-04-20&sortBy=publishedAt&apiKey=22793fc487";
     this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    this.setState({ loading: false });
  }

  

  

  render() {
    return (
      <div className="container my-3">
        <h1>News Monkey - Top Headlines</h1>
      {this.state.loading && <Spinner/>}
        {this.state.loading && <spinner/>}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title : " "}
                  description={element.description ? element.description : "no disption "}
                  urlToImage={element.urlToImage ? element.urlToImage : "https://biztoc.com/cdn/c02ed7c6b6e37d96_s.webp"}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          
        </div>
         
        <div className="container d-flex justify-content-between">
          <button type="button" onClick={this.handlePre} className="btn btn-dark">Previous</button>
          <button type="button" onClick={this.handleNext} className="btn btn-dark"> Next</button>
          <button type="button" onClick={this.handlePre} className="btn btn-dark">Previous</button>
          <button type="button" onClick={this.handleNext} className="btn btn-dark"> Next</button>
         
        </div>
         
      </div>
   
      
    );
  }
}
}

export default News;

