import React, { Component } from 'react'
import NewSingle from './NewSingle'

class News extends Component {
  constructor(props){
    super(props);
    this.state={
      news:[]
    }
  }

componentDidMount(){
  const url = `https://newsapi.org/v2/everything?q=${this.props.subject}&from=2018-11-1&sortBy=publishedAt&apiKey=365912edac644caf94afc847be237d19`
  console.log(url);

  fetch(url)
    .then((response)=>{
    return response.json()
  })
    .then((data)=>{
      this.setState({
        news:data.articles
      })
  })
  .catch((err) => console.log(err));

}

renderItems(){
  return this.state.news.map((item) =>(
    <NewSingle key={item.url} item={item} />
  ))
}



  render (){
    return (
      <div className='row'>
        {this.renderItems()}
      </div>
    )
  }
}

export default News;
