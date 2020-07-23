import React, { Component } from 'react';
import ImageSearch from '../ImageSearch/ImageSearch';


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
