import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ImageSearch from '../ImageSearch/ImageSearch';
import {connect} from 'react-redux'
import FavItem from '../FavItem/FavItem';

class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <header >
              <nav>
                <ul>                
                  <li><Link to="/">Home</Link></li>
                <li><Link to="/favorite">Favorites</Link></li>
                 </ul>
              </nav>
            </header>
            <h1>Giphy Search!</h1>
            <div className="content-container">
              {/* <Route exact path="/" component={COMPONENTNAME} /> */}
              <Route path="/favorite" component={FavView} />
            </div>
          </div>
      </Router>
      <div>
        <h1>Giphy Search!</h1>
        <Router>
          <li>
            <Link to='/'>Search</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
          <Route exact path="/favorites" component={FavItem} />
          <Route exact path="/" component={ImageSearch}/>
        </Router>
      </div>
    );
  }
  
}



export default connect()(App);
