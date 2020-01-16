import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { resetCounterAction, incrementCounterAction, unknownAction, extraCounterAction } from './actions/renderer';
import { selectReducerCount, selectMessage, selectExtra } from './reducers/renderer';

class App extends Component {

  constructor(props) {
    super(props);
    this.renderCount = 0;
  }

  resetCounterAction = (event) => {
    this.props.resetCounter();
  }

  incrementCounterAction = (event) => {
    this.props.incrementCounter();
  }

  unknownAction = (event) => {
    this.props.unknown();
  }

  extraCounterAction = (event) => {
    this.props.extraCounter();
  }

  incrementOnRender = () => {
    this.renderCount = this.renderCount + 1;
  }

  showDescription = () => {
    console.log('....................');
  }

  render() {

    console.count('App render count');

    this.incrementOnRender();

    return (
      <div className="App">

        <div style={{ backgroundColor: '#3D94F6', minHeight: '50h', padding: '20px' }}>
          <h3>This is a single component app.</h3>
        </div>

        <div style={{ margin: '50px' }}>
          <button className='mybutton' onClick={this.incrementCounterAction}>Increment Counter</button>
          <button className='mybutton' onClick={this.resetCounterAction}>Reset Counter</button>
          <button className='mybutton' onClick={this.unknownAction}>Unknown Action</button>
          <button className='mybutton' onClick={this.extraCounterAction}>Extra Counter</button>
        </div>
{/* 
        <div className='center'>
          <p>this.</p>
        </div> */}

        <div style={{ marginTop: '50px', backgroundColor: '#3D94F6', minHeight: '100vh', padding: '20px' }}>

          <h2>Component render count:</h2>
          <p className='App-p'>{this.renderCount}</p>

          <h2>Counter state prop:</h2>
          <p className='App-p'>{this.props.count}</p>

        </div>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  resetCounter: () => dispatch(resetCounterAction()),
  incrementCounter: () => dispatch(incrementCounterAction()),
  unknown: () => dispatch(unknownAction()),
  extraCounter: () => dispatch(extraCounterAction())
})

const mapStateToProps = state => ({
  count: selectReducerCount(state),
  //message: selectMessage(state),
  //extra: selectExtra(state) //uncommenting will cause rerender
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
