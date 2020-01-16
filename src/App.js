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

        <header className='App-header'>

          <p>
            What makes a react component to update is a change in its state or props.<br />
            Update involves calling multiple life cycle events and one of them is <b>render()</b> method, which is what we are intersted in.<br />
            <a href='https://reactjs.org/docs/react-component.html#updating'>Link</a>
            <br /><br />
            When a component is connected to redux 2 things must be satisfied for a component to rerender:<br /><br />
            1. A change to store state, which will lead to re-evaluation of mapStateToProps.<br />
            2. A change to at least one of the mapStateToProps properties used by the component.
          </p>

          <p>Note: We are using a single react component. No children react components.</p>

        </header>

        <div style={{ margin: '50px' }}>
          <button className='mybutton' onClick={this.incrementCounterAction}>1. Increment Counter</button>
          <button className='mybutton' onClick={this.resetCounterAction}>2. Reset Counter</button>
          <button className='mybutton' onClick={this.unknownAction}>3. Unknown Action</button>
          <button className='mybutton' onClick={this.extraCounterAction}>4. Extra Counter</button>
        </div>

        <div style={{ marginTop: '50px', backgroundColor: '#3D94F6', minHeight: '100vh', padding: '20px' }}>

          <p className='label'>Component render count:</p>
          <p className='label'>{this.renderCount}</p>

          <p className='label'>Counter state prop:</p>
          <p className='label'>{this.props.count}</p>

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
