import React, { Component } from 'react';
import ImageSearch from '../ImageSearch/ImageSearch';
import {connect} from 'react-redux'

class App extends Component {

  render() {
    return (
      <div>
        <ImageSearch/>
      </div>
    );
  }
  
}



export default connect()(App);
