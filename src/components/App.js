import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuakeList from './QuakeList';
import PropTypes from 'prop-types';
import {QuakeQueryActionCreator} from '../actions/index';


class App extends Component {

  constructor(props){
    super(props);

  }

  getQuakeData(){
    console.log('quack quack.')
    const { dispatch } = this.props;
    const quakePromise = QuakeQueryActionCreator();
    quakePromise.then((action)=>{
      dispatch(action);
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getQuakeData}>
          Quack the Quakes
        </button>
        <QuakeList quakeList= {this.props.quakes}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quakes: state.quakes
  }
};

App.propTypes = {
  quakes: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      properties: PropTypes.object,
      geometry: PropTypes.shape({
        type: PropTypes.string,
        coordinates: PropTypes.arrayOf(
          PropTypes.number
        )
      }),
      id: PropTypes.string
    })
  ).isRequired
}

export default connect()(App);
