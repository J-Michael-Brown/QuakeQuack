import React, { Component } from 'react';
import QuakeList from './QuakeList';

class App extends Component {

  getQuakeData(){
    console.log('quack quack.')
  }

  render() {
    return (
      <div>
        <button onClick={this.getQuakeData}>
          Quack the Quakes
        </button>
        <QuakeList />
      </div>
    );
  }
}

export default App;
