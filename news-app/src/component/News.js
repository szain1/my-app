import React, { Component } from 'react';
import NewsItems from './NewsItems';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    };
  }

  async componentDidMount() {
    console.log("Hello I am componentDidMount from news component");
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2025-04-16&sortBy=publishedAt&apiKey=22793fc487974694bda62f38a77e3a11";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>News Monkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title : " "}
                  description={element.description ? element.description : "no disption "}
                  urlToImage={element.urlToImage ? element.urlToImage : "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720"}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container">
          {/* <button type="button" onClick={} className="btn btn-dark">next</button>
          <button type="button" onClick={} className="btn btn-dark">previous</button> */}
        </div>
      </div>
    );
  }
}

export default News;
