import { useState } from "react";

import './App.css';
import { Info } from "./components/Info";
import { Info2 } from "./components/Info2";

function App() {
const [socketOn, setState] = useState(true);
  return (
      <div className="App">
        <button onClick={() => setState(!socketOn)}>qert</button>
        {
          socketOn
            ? <Info/>
            : <Info2/>
        }
      </div>
  );
}

export default App;
