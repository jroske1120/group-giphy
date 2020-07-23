import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavItem extends Component {

    // getFruit() {
    //     this.props.dispatch( { type: 'FETCH_FRUIT' } );
    // }

    render() {
        return (

            // <li>
            // <img src={this.props.REDUCERNAME.path}/>

            // </li>

            <li>
                <img src={this.props.reduxState.dummyReducerList} />
                <select>
                    <option>funny</option>
                    <option>cohort</option>
                    <option>cartoon</option>
                    <option>nsfw</option>
                    <option>meme</option>
                </select>
            </li>

        )
    }
}

// do we care about redux here. - yes, because... we have to connect to other stuff. yes...
const mapReduxStateToProps = ( reduxState ) => ({
    reduxState
});

export default connect( mapReduxStateToProps )( FavItem );
