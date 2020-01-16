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

  render() {

    console.count('App render count');

    this.incrementOnRender();

    return (
      <div className="App">
        <h1>React Redux Rendering Essence</h1>
        <h3><a href='https://github.com/raedbenz/react-redux-render-essence'>GitHub repo</a></h3>

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
        </header>

        <div style={{ margin: '30px' }}>
          <button className='mybutton' onClick={this.incrementCounterAction}>1. Increment Counter</button>

          <button className='mybutton' onClick={this.resetCounterAction}>2. Reset Counter</button>

          <button className='mybutton' onClick={this.unknownAction}>3. Unknown Action</button>

          <button className='mybutton' onClick={this.extraCounterAction}>4. Extra Counter</button>

          <p>1. Every time you click it, the action will cause the reducer to return new state object that contains a modified mapStateToProps prop; counter.</p>

          <p>2. First time you click it resets counter to 0, hence causing rerender. Any subsequent clicks will have no new mapStateToProps.</p>

          <p>3. Every time you click it, fires an action that is not recognised by the reducer, hence the same state object returned to redux i.e. no store state changes.</p>

          <p>4. Every time you click it, will cause new state object and modified property, but the property is not part of the mapStateToProps, hence no rerendering.</p>
        </div>

        <div style={{ marginTop: '30px', backgroundColor: '#3D94F6', minHeight: '100vh', padding: '10px' }}>
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
