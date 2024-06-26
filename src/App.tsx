import React, { lazy, useState, Suspense } from 'react';

import Sort from "./components/Sort";
import DatePick from './components/DatePick';

import useFetch from "./hooks/useFetch";
import './App.css';


const initialState = { total: null, friends: null, chirpiness: null, influence: null };

const UserList = lazy(() => import("./components/Users"));

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


  return (
    <div className="App">

      {/* App header Start */}
      <div className='header'>
        <DatePick {...props} />
        <Sort criteria={criteria} setCriteria={setCriteria} />
      </div>
      {/* App header end */}

      {/* User List */}
      <Suspense fallback="loading...">
        <UserList {...props} />
      </Suspense>

    </div>
  );
}

export default App;
