import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuakeList from './QuakeList';
import PropTypes from 'prop-types';
import {QuakeQueryActionCreator} from '../actions/index';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
    console.log('app props',props);
    this.getQuakeData = this.getQuakeData.bind(this)
  }

  getQuakeData(){
    const { dispatch } = this.props;
    const quakePromise = QuakeQueryActionCreator();
    console.log('quakePromise', quakePromise);
    quakePromise.then((action)=>{
      console.log("action", action);
      // this.setState(Object.assign({}, this.state, {message: action.quakes[0]}))
      return dispatch(action);
    })
  };


  render() {
    if(!this.props.quakes){
      return (
        <div>
          <button onClick={this.getQuakeData}>
            Quack the Quakes
          </button>
          <p>loading...</p>
        </div>
      );
    } else {
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
}

const mapStateToProps = state =>{
  return {
    quakes: state.quakes,
    info: 'click the update button!'
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
  )
}

export default connect(mapStateToProps)(App);
