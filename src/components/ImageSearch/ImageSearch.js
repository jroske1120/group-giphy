import React, { Component } from 'react';
import ImageDisplay from '../ImageDisplay/ImageDisplay';
import { connect } from 'react-redux';


class ImageSearch extends Component {

  state = {
    search: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit:', this.state.search);
    this.props.dispatch({type: "SET_IMAGE", payload: this.state.search})

  }

  handleChange = (event) => {
    console.log('in search field', event.target.value);
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} placeholder="Search"></input>
          <button type="submit">Search</button>
        </form>
        {/* <ul>
          {this.props.reduxState.searchResultReducer.map((item, index) =>{
          return (
            <li key={index}><img src={item.data.images.original.url} alt="img"/></li>
          )
          })} 
        </ul> */}
         {this.props.reduxState.searchResultReducer.map((item, index)=>{
           return <img key={index} src={item.images.downsized.url} alt={item.title}/>
          })} 
          {/* {JSON.stringify(this.props.reduxState && this.props.reduxState.searchResultReducer && this.props.reduxState.searchResultReducer.map((item, index)=>{
            <p key={index}>{item}</p>
          }))} */}
        <ImageDisplay/>
      </div>
    );
  }
  
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ImageSearch);
