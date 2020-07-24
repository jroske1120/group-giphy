import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ImageSearch from '../ImageSearch/ImageSearch';
import {connect} from 'react-redux'
import FavView from '../FavView/FavView';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Router>
          <li>
            <Link to='/'>Search</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
          <Route exact path="/favorites" component={FavView} />
          <Route exact path="/" component={ImageSearch}/>
        </Router>
      </div>
    );
  }
  
}



export default connect()(App);
