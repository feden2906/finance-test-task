import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import io from 'socket.io-client';
import { setNewResponse, setNewTime } from "../redux";

const SERVER_URL = 'http://localhost:5000';

export const Select = () => {

  const dispatch = useDispatch();
  const {time} = useSelector(({movies}) => movies);
  const socket = io(SERVER_URL);

  useEffect( () => {
    socket.emit("start", time);
    socket.on("ticker", data => {
      dispatch(setNewResponse(data));
    });

    return () => socket.disconnect();
  }, [time]);

  const chooseCar = (e) => dispatch(setNewTime(+e.target.value));

  return (
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
    );
}
