import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavView from '../FavView/FavView'


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        {/* <SearchView />
        <FavView/> */}
        <FavView />
      </div>
    );
  }
  
}



export default connect()(App);
