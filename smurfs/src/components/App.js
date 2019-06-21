import React, { Component } from 'react';
import './App.css';

import Loader from 'react-loader-spinner';

import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm addSmurf={this.props.addSmurf}/>
        {this.props.smurfs.map(smurf => {
          return(
            <div key={smurf.id}>
              <p>{smurf.name}</p>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          )
        })}
        {this.props.fetchingSmurfs ? <Loader type="TailSpin" color="#somecolor" height={150} width={150} /> : null}
      </div>
    );
  }
}

const mstp = state => {
  console.log(state)
  return {
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs
  }
}

export default connect(mstp, { getSmurfs, addSmurf })(App)
