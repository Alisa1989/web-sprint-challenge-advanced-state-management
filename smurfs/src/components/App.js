import React, { useEffect } from "react";

import SmurfForm from "./SmurfForm";
import "./App.css";
import {getSmurfs} from "../actions/smurfActions";

function App() {

  useEffect(() => {
    getSmurfs();

  })

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <button onClick={getSmurfs()}>Get Smurfs</button>

        <SmurfForm/>
      </div>
    );
}

export default App;
