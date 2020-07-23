//import things
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import FavItem from '../FavItem/FavItem.js';

class FavView extends Component {

    // GEt request things
    getFavList = () => {
        axios.get( '/api/favorite' )
            .then( ( response ) => {
            console.log( 'Getting favoriteList from server', response.data );
            //this.props.dispatch({ type: "SET_PIZZA", payload: response.data });
            })
            .catch( (error) => {
            console.log( 'Error on GET', error );
            alert("Error on GET favoriteList");
            })
    }

    // Put request things
    



    render() {
        return (
            <div>
                <h1>Your Favorites!</h1>
                {/* map from reduxState to list of added images */}
                 JSON stringify to see our path
               {/* {JSON.stringify(this.props.reduxState.dummyReducerList) } */}
               {/* <ul>
               {this.props.reduxState.differentReducer.map((item) =>{
                   return (
                       <FavItem key={item.id} item={item}/>
                   )
               })} </ul> */}

                {/* For each image, have a selec>options with categories */}

            </div>
        );
    }

}


// Makes our reducers available in our component
const mapReduxStateToProps = ( reduxState ) => ({
    reduxState
});

export default connect( mapReduxStateToProps )( FavView );