import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FavView from '../FavView/FavView'


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
    );
  }
  
}



export default connect()(App);
