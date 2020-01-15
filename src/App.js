import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { oneOffRenderingAction, continuousRenderingAction, unknownAction, nonRenderingAction } from './actions/renderer';
import { selectReducerCount, selectMessage, selectExtra } from './reducers/renderer';

class App extends Component {

  constructor(props) {
    super(props);
    this.renderCount = 0;
  }

  oneOffRenderingAction = (event) => {
    this.props.oneOffRenderingAction();
  }

  continuousRenderingAction = (event) => {
    this.props.continuousRenderingAction();
  }

  unknownAction = (event) => {
    this.props.unknownAction();
  }

  nonRenderingAction = (event) => {
    this.props.nonRenderingAction();
  }

  incrementOnRender = () => {
    this.renderCount = this.renderCount + 1;
  }

  render() {
    console.count('App render count');
    this.incrementOnRender();
    console.log(this.renderCount);

    return (
      <div className="App">

        <div style={{ margin: '50px' }}>
          <button className='mybutton' onClick={this.oneOffRenderingAction}>One Off Rendering</button>
          <button className='mybutton' onClick={this.continuousRenderingAction}>Continuous Rendering</button>
          <button className='mybutton' onClick={this.unknownAction}>Unknown</button>
          <button className='mybutton' onClick={this.nonRenderingAction}>Non Rendering</button>
        </div>

        <div style={{ marginTop: '50px', backgroundColor: '#3D94F6', minHeight: '100vh', padding: '20px' }}>
          <h2>Component render count:</h2>
          <p className='App-p'>{this.renderCount}</p>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  oneOffRenderingAction: () => dispatch(oneOffRenderingAction()),
  continuousRenderingAction: () => dispatch(continuousRenderingAction()),
  unknownAction: () => dispatch(unknownAction()),
  nonRenderingAction: () => dispatch(nonRenderingAction())
})

const mapStateToProps = state => ({
  count: selectReducerCount(state),
  message: selectMessage(state),
  //extra: selectExtra(state) //uncommenting will cause rerender
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
