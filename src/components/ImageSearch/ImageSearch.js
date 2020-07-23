import React, { Component } from 'react';
import ImageDisplay from '../ImageDisplay/ImageDisplay';


class ImageSearch extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <ImageDisplay/>
      </div>
    );
  }
  
}

export default ImageSearch;
