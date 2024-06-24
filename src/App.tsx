import React, { useState } from 'react';
import User from "./components/Users"
import Sort from "./components/Sort"
import DatePick from './components/DatePick';
import useFetch from "./hooks/useFetch"
import './App.css';


const initialState = { total: null, friends: null, chirpiness: null, influence: null };
function App() {
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);

  const [criteria, setCriteria] = useState([initialState]);

  let { total, onRemove, setUselen, users } = useFetch(criteria, startDate, endDate);

  const props = {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    onRemove,
    setUselen,
    total,
    users,
  };

  // console.log(Date.parse(startDate), endDate);
  // if (startDate && endDate) {
  //   console.log(startDate > endDate);
  // }


  return (
    <div className="App">
      <div className='header'>
        <DatePick {...props} />
        <Sort criteria={criteria} setCriteria={setCriteria} />
      </div>
      <User {...props} />
    </div>
  );
}

export default App;
