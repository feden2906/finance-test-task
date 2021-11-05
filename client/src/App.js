import './App.css';
import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const SERVER_URL = 'http://localhost:5000';

function App() {
  const [response, setResponse] = useState("");
  const [selectValue, setSelectValue] = useState(5000);

  const socket = io(SERVER_URL);

  useEffect( () => {
    socket.emit("start", selectValue);
    socket.on("ticker", data => {
      setResponse(data);
    });

    return () => socket.disconnect();
  }, [selectValue]);

  const chooseCar = (e) => setSelectValue(+e.target.value);

  return (
      <div className="App">
        {/*<button onClick={() => socket.disconnect()}>qert</button>*/}
        <form onChange={chooseCar}>
          <select>
            <option value="1000">1c</option>
            <option value="5000">5c</option>
            <option value="10000">10c</option>
            <option value="20000">20c</option>
            <option value="30000">30c</option>
            <option value="60000">60c</option>
          </select>
        </form>
        {
          JSON.stringify(response)
        }
      </div>
  );
}

export default App;
