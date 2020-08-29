import React, { useEffect, useReducer } from "react";

import { connect } from 'react-redux';

import SmurfForm from "./SmurfForm";
import "./App.css";
import {getSmurfs} from "../actions/smurfActions";
//import {smurfReducer, initialState} from "../reducers/smurfReducer";
import ListSmurfs from "./ListSmurfs";

function App(props) {
  useEffect(() => {
    props.getSmurfs();
  },[])

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <button onClick={props.getSmurfs}>Get Smurfs</button>
      
        <SmurfForm/>
        <ListSmurfs/>
      </div>
    );
}

const mapDispatchToProps = {
  getSmurfs
}

export default connect(null, mapDispatchToProps)(App);
