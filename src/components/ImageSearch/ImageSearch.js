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
        <ImageDisplay/>
      </div>
    );
  }
  
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ImageSearch);
