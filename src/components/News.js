import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("Hellooooooo");

    this.state={
      
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp-Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
          <NewsItem title="myTitle" description="myDesc" imageUrl=""/>
          </div>

          <div className="col-md-4">
          <NewsItem title="myTitle" description="myDesc"/>
          </div>

          <div className="col-md-4">
          <NewsItem title="myTitle" description="myDesc"/>
          </div>
        </div>

      </div>
    )
  }
}

export default News
