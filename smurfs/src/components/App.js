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

  // deleteSmurf = id => {
  //   this.props.deleteSmurf(id)
  // }
  // updateSmurf = id => {
  //   this.props.updateSmurf(id)
  // }

  render() {
    return (
      <div className="App ">
        <h1 className= 'text-xl my-3'>SMURFS! 2.0 W/ Redux</h1>
        <div className='smurf-container'>
        <SmurfForm addSmurf={this.props.addSmurf}/>
        {this.props.smurfs.map(smurf => {
          return(
            <div key={smurf.id} className= ' smurf max-w-sm rounded overflow-hidden shadow-lg'>
              <p>{smurf.name}</p>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline m-1'>Update</button>
              <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'>Delete</button>
              {/* <button onClick={this.deleteSmurf(smurf.id)}>Delete</button> */}
              {/* <button onClick={this.updateSmurf(smurf.id)}>Update</button> */}
            </div>
          )
        })}
        {this.props.fetchingSmurfs ? <Loader type="TailSpin" color="#somecolor" height={150} width={150} /> : null}
      </div>
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
