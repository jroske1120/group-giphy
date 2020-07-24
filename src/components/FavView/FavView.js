//import things
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import FavItem from '../FavItem/FavItem.js';

class FavView extends Component {

    handleChange = (event, type) => {
        console.log('in handleChange', event.target.value);
        // this.props.dispatch({
        //   type: "ADD_FEEDBACK",
        //   payload: {
        //       category: event.target.value
        //   }
        // })
    }

    handleSubmit = () => {
        console.log('in handleSubmit');
        // conditional that will only advance to next page
        // if a response is provided
        // this.props.dispatch
    }

    render() {
        return (
            <div>
                <h1>Your Favorites!</h1>
                {/* map from reduxState to list of added images */}
                <ul>
                    {this.props.reduxState.favReducer.map((item, index) => {
                        return (
                            <li key={index}>
                                <img src={item} />
                                <br></br>
                                <select
                                    // value={this.props.reduxState.favReducer.category_id}
                                    onChange={this.handleChange}>
                                    <option value="1">funny</option>
                                    <option value="2">cohort</option>
                                    <option value="3">cartoon</option>
                                    <option value="4">nsfw</option>
                                    <option value="5">meme</option>
                                </select>
                                <button onClick={this.handleSubmit}>Add to this category</button>
                            </li>)
                    })} </ul>

                {/* For each image, have a selec>options with categories */}

            </div>
        );
    }

}


// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FavView);